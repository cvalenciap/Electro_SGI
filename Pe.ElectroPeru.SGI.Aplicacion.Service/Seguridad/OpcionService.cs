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
    public class OpcionService : GenericService, IOpcionService
    {
        public IOpcionLogicRepository LogicRepository { get; set; }

        public IOpcionEntityRepository EntityRepository { get; set; }

        public ProcessResult<List<OpcionResponse>> Buscar(OpcionRequest filtro)
        {
            ProcessResult<List<OpcionResponse>> resultado = new ProcessResult<List<OpcionResponse>>();

            try
            {
                List<OpcionLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoOpcion,
                    filtro.CodigoModulo,
                    filtro.OpcionPadre,
                    filtro.OpcionPadreNombre,
                    filtro.Nombre,
                    filtro.Descripcion,
                    filtro.Controlador,
                    filtro.Metodo,
                    filtro.Area,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<OpcionResponse>();

                foreach (OpcionLogic item in lista)
                {
                    OpcionResponse Response = OpcionAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<OpcionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<OpcionResponse> Obtener(float codigo)
        {
            ProcessResult<OpcionResponse> resultado = new ProcessResult<OpcionResponse>();

            try
            {
                OpcionLogic lista = LogicRepository.Obtener(codigo);

                resultado.Result = new OpcionResponse();

                if (resultado.Result != null)
                    resultado.Result = OpcionAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<OpcionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<OpcionResponse>> Listar()
        {
            ProcessResult<List<OpcionResponse>> resultado = new ProcessResult<List<OpcionResponse>>();

            try
            {
                List<OpcionLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<OpcionResponse>();

                foreach (OpcionLogic item in lista)
                {
                    OpcionResponse Response = OpcionAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<OpcionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> Registrar(OpcionRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoOpcion > 0)
                {
                    OpcionEntity Entity = EntityRepository.GetById(data.CodigoOpcion);

                    if (Entity != null)
                    {
                        Entity.CodigoOpcion = data.CodigoOpcion;
                        Entity.CodigoModulo = data.CodigoModulo;
                        Entity.OpcionPadre = data.OpcionPadre;
                        Entity.Nombre = data.Nombre;
                        Entity.Descripcion = data.Descripcion;
                        Entity.Glyphicon = data.Glyphicon;
                        Entity.Controlador = data.Controlador;
                        Entity.Metodo = data.Metodo;
                        Entity.Area = data.Area;

                        EntityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        EntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    OpcionEntity Entity = new OpcionEntity();
                    Entity.CodigoModulo = data.CodigoModulo;
                    Entity.OpcionPadre = data.OpcionPadre;
                    Entity.Nombre = data.Nombre;
                    Entity.Descripcion = data.Descripcion;
                    Entity.Glyphicon = data.Glyphicon;
                    Entity.Controlador = data.Controlador;
                    Entity.Metodo = data.Metodo;
                    Entity.Area = data.Area;

                    EntityRepository.Insertar(Entity);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<OpcionService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(OpcionRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                OpcionEntity Entity = EntityRepository.GetById(filtro.CodigoOpcion);

                if (Entity != null)
                {
                    EntityRepository.Eliminar(Entity.CodigoOpcion);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<OpcionService>(ex.Message);
            }
            return resultado;
        }
    }
}
