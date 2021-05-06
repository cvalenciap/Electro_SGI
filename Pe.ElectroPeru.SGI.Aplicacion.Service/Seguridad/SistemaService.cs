using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System;
using System.Collections.Generic;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Seguridad
{
    public class SistemaService : GenericService, ISistemaService
    {
        public ISistemaLogicRepository LogicRepository { get; set; }

        public ISistemaEntityRepository EntityRepository { get; set; }

        public ProcessResult<List<SistemaResponse>> Buscar(SistemaRequest filtro)
        {
            ProcessResult<List<SistemaResponse>> resultado = new ProcessResult<List<SistemaResponse>>();

            try
            {
                List<SistemaLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoSistema,
                    filtro.Nombre,
                    filtro.Descripcion,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<SistemaResponse>();

                foreach (SistemaLogic item in lista)
                {
                    SistemaResponse Response = SistemaAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<SistemaService>(ex);
            }

            return resultado;
        }

        public ProcessResult<SistemaResponse> Obtener(float codigo)
        {
            ProcessResult<SistemaResponse> resultado = new ProcessResult<SistemaResponse>();

            try
            {
                SistemaLogic lista = LogicRepository.Obtener(codigo);

                resultado.Result = new SistemaResponse();

                if (resultado.Result != null)
                    resultado.Result = SistemaAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<SistemaService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<SistemaResponse>> Listar()
        {
            ProcessResult<List<SistemaResponse>> resultado = new ProcessResult<List<SistemaResponse>>();

            try
            {
                List<SistemaLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<SistemaResponse>();

                foreach (SistemaLogic item in lista)
                {
                    SistemaResponse Response = SistemaAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<SistemaService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> Registrar(SistemaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoSistema > 0)
                {
                    SistemaEntity Entity = EntityRepository.GetById(data.CodigoSistema);

                    if (Entity != null)
                    {
                        Entity.CodigoSistema = data.CodigoSistema;
                        Entity.Nombre = data.Nombre;
                        Entity.Descripcion = data.Descripcion;
                        Entity.Ruta = data.Ruta;
                        Entity.Token = data.Token;
                        Entity.Parametro = data.Parametro;
                        Entity.ValorParametro = data.ValorParametro;

                        EntityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        EntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    SistemaEntity Entity = new SistemaEntity();
                    Entity.Nombre = data.Nombre;
                    Entity.Descripcion = data.Descripcion;
                    Entity.Token = data.Token;
                    Entity.Parametro = data.Parametro;
                    Entity.ValorParametro = data.ValorParametro;

                    EntityRepository.Insertar(Entity);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<SistemaService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(SistemaRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                SistemaEntity Entity = EntityRepository.GetById(filtro.CodigoSistema);

                if (Entity != null)
                {
                    EntityRepository.Eliminar(Entity.CodigoSistema);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<SistemaService>(ex.Message);
            }
            return resultado;
        }
    }
}
