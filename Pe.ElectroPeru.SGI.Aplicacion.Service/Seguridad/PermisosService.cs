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
    public class PermisosService : GenericService, IPermisosService
    {
        public IPermisosLogicRepository LogicRepository { get; set; }

        public IPermisosEntityRepository EntityRepository { get; set; }

        public ProcessResult<List<PermisosResponse>> Buscar(PermisosRequest filtro)
        {
            ProcessResult<List<PermisosResponse>> resultado = new ProcessResult<List<PermisosResponse>>();

            try
            {
                List<PermisosLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoPermisos,
                    filtro.CodigoPerfil,
                    filtro.CodigoAccion,
                    filtro.CodigoOpcion,
                    filtro.Perfil,
                    filtro.Accion,
                    filtro.Opcion,
                    filtro.EstadoPermisoDescripcion,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<PermisosResponse>();

                foreach (PermisosLogic item in lista)
                {
                    PermisosResponse Response = PermisosAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PermisosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<PermisosResponse> Obtener(float codigo)
        {
            ProcessResult<PermisosResponse> resultado = new ProcessResult<PermisosResponse>();

            try
            {
                PermisosLogic lista = LogicRepository.Obtener(codigo);

                resultado.Result = new PermisosResponse();

                if (resultado.Result != null)
                    resultado.Result = PermisosAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PermisosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<PermisosResponse>> Listar()
        {
            ProcessResult<List<PermisosResponse>> resultado = new ProcessResult<List<PermisosResponse>>();

            try
            {
                List<PermisosLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<PermisosResponse>();

                foreach (PermisosLogic item in lista)
                {
                    PermisosResponse Response = PermisosAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PermisosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> Registrar(PermisosRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoPermisos > 0)
                {
                    PermisosEntity Entity = EntityRepository.GetById(data.CodigoPermisos);

                    if (Entity != null)
                    {
                        Entity.CodigoPermisos = data.CodigoPermisos;
                        Entity.CodigoPerfil = data.CodigoPerfil;
                        Entity.CodigoAccion = data.CodigoAccion;
                        Entity.CodigoOpcion = data.CodigoOpcion;
                        Entity.EstadoPermiso = data.EstadoPermiso;

                        EntityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        EntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    PermisosEntity Entity = new PermisosEntity();
                    Entity.CodigoPerfil = data.CodigoPerfil;
                    Entity.CodigoAccion = data.CodigoAccion;
                    Entity.CodigoOpcion = data.CodigoOpcion;
                    Entity.EstadoPermiso = data.EstadoPermiso;

                    EntityRepository.Insertar(Entity);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<PermisosService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(PermisosRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                PermisosEntity Entity = EntityRepository.GetById(filtro.CodigoPermisos);

                if (Entity != null)
                {
                    EntityRepository.Eliminar(Entity.CodigoPermisos);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<PermisosService>(ex.Message);
            }
            return resultado;
        }
    }
}
