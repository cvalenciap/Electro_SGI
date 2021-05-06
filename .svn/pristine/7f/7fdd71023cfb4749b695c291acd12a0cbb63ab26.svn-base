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
    public class AsignacionService : GenericService, IAsignacionService
    {
        public IAsignacionLogicRepository LogicRepository { get; set; }

        public IAsignacionEntityRepository entityRepository { get; set; }

        public ProcessResult<List<AsignacionResponse>> Buscar(AsignacionRequest filtro)
        {
            ProcessResult<List<AsignacionResponse>> resultado = new ProcessResult<List<AsignacionResponse>>();

            try
            {
                List<AsignacionLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoAsignacion,
                    filtro.CodigoSistema,
                    filtro.CodigoUsuario,
                    filtro.CodigoPerfil,
                    filtro.Sistema,
                    filtro.Usuario,
                    filtro.Perfil,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<AsignacionResponse>();

                foreach (AsignacionLogic item in lista)
                {
                    AsignacionResponse Response = AsignacionAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerfilService>(ex);
            }

            return resultado;
        }

        public ProcessResult<AsignacionResponse> Obtener(float codigo)
        {
            ProcessResult<AsignacionResponse> resultado = new ProcessResult<AsignacionResponse>();

            try
            {
                AsignacionLogic lista = LogicRepository.Obtener(codigo);

                resultado.Result = new AsignacionResponse();

                if (resultado.Result != null)
                    resultado.Result = AsignacionAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AsignacionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<AsignacionResponse>> Listar()
        {
            ProcessResult<List<AsignacionResponse>> resultado = new ProcessResult<List<AsignacionResponse>>();

            try
            {
                List<AsignacionLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<AsignacionResponse>();

                foreach (AsignacionLogic item in lista)
                {
                    AsignacionResponse Response = AsignacionAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AsignacionService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> Registrar(AsignacionRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoAsignacion > 0)
                {
                    AsignacionEntity Entity = entityRepository.GetById(data.CodigoAsignacion);

                    if (Entity != null)
                    {
                        Entity.CodigoAsignacion = data.CodigoAsignacion;
                        Entity.CodigoPerfil = data.CodigoPerfil;
                        Entity.CodigoSistema = data.CodigoSistema;
                        Entity.CodigoUsuario = data.CodigoUsuario;

                        entityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        entityRepository.GuardarCambios();
                    }
                }
                else
                {
                    AsignacionEntity Entity = new AsignacionEntity();
                    Entity.CodigoAsignacion = data.CodigoAsignacion;
                    Entity.CodigoPerfil = data.CodigoPerfil;
                    Entity.CodigoSistema = data.CodigoSistema;
                    Entity.CodigoUsuario = data.CodigoUsuario;

                    entityRepository.Insertar(Entity);
                    resultado.IsSuccess = true;
                    entityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<AsignacionService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(AsignacionRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                AsignacionEntity Entity = entityRepository.GetById(filtro.CodigoAsignacion);

                if (Entity != null)
                {
                    entityRepository.Eliminar(Entity.CodigoAsignacion);

                    resultado.IsSuccess = true;
                    entityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<AsignacionService>(ex.Message);
            }
            return resultado;
        }
    }
}
