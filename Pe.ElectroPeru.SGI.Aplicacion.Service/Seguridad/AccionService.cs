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
    public class AccionService : GenericService, IAccionService
    {
        public IAccionLogicRepository LogicRepository { get; set; }

        public IAccionEntityRepository EntityRepository { get; set; }

        public ProcessResult<List<AccionResponse>> Buscar(AccionRequest filtro)
        {
            ProcessResult<List<AccionResponse>> resultado = new ProcessResult<List<AccionResponse>>();

            try
            {
                List<AccionLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoAccion,
                    filtro.Nombre,
                    filtro.Descripcion,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<AccionResponse>();

                foreach (AccionLogic item in lista)
                {
                    AccionResponse Response = AccionAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<AccionResponse> Obtener(float codigo)
        {
            ProcessResult<AccionResponse> resultado = new ProcessResult<AccionResponse>();

            try
            {
                AccionLogic lista = LogicRepository.Obtener(codigo);

                resultado.Result = new AccionResponse();

                if (resultado.Result != null)
                    resultado.Result = AccionAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<AccionResponse>> Listar()
        {
            ProcessResult<List<AccionResponse>> resultado = new ProcessResult<List<AccionResponse>>();

            try
            {
                List<AccionLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<AccionResponse>();

                foreach (AccionLogic item in lista)
                {
                    AccionResponse Response = AccionAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> Registrar(AccionRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoAccion > 0)
                {
                    AccionEntity Entity = EntityRepository.GetById(data.CodigoAccion);

                    if (Entity != null)
                    {
                        Entity.CodigoAccion = data.CodigoAccion;
                        Entity.Nombre = data.Nombre;
                        Entity.Descripcion = data.Descripcion;

                        EntityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        EntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    AccionEntity Entity = new AccionEntity();
                    Entity.Nombre = data.Nombre;
                    Entity.Descripcion = data.Descripcion;

                    EntityRepository.Insertar(Entity);
                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<AccionService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(AccionRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                AccionEntity Entity = EntityRepository.GetById(filtro.CodigoAccion);

                if (Entity != null)
                {
                    EntityRepository.Eliminar(Entity.CodigoAccion);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<AccionService>(ex.Message);
            }
            return resultado;
        }
    }
}

