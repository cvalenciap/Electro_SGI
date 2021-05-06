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
using Pe.ElectroPeru.SGI.Transversal.Core.Util;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Seguridad
{
    public class PerfilService : GenericService, IPerfilService
    {
        public IPerfilLogicRepository LogicRepository { get; set; }

        public IPerfilEntityRepository EntityRepository { get; set; }

        public ProcessResult<List<PerfilResponse>> Buscar(PerfilRequest filtro)
        {
            ProcessResult<List<PerfilResponse>> resultado = new ProcessResult<List<PerfilResponse>>();

            try
            {
                List<PerfilLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoPerfil,
                    filtro.CodigoSistema,
                    filtro.Sistema,
                    filtro.Nombre,
                    filtro.Descripcion,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);
                
                resultado.Result = new List<PerfilResponse>();

                foreach (PerfilLogic item in lista)
                {
                    PerfilResponse Response = PerfilAdapter.ObtenerPaginado(item);
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

        public ProcessResult<PerfilResponse> Obtener(int codigo)
        {
            ProcessResult<PerfilResponse> resultado = new ProcessResult<PerfilResponse>();

            try
            {
                PerfilLogic lista = LogicRepository.Obtener(codigo);

                resultado.Result = new PerfilResponse();

                if (resultado.Result != null)
                    resultado.Result = PerfilAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerfilService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<PerfilResponse>> Listar()
        {
            ProcessResult<List<PerfilResponse>> resultado = new ProcessResult<List<PerfilResponse>>();

            try
            {
                List<PerfilLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<PerfilResponse>();

                foreach (PerfilLogic item in lista)
                {
                    PerfilResponse Response = PerfilAdapter.ObtenerPaginado(item);
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

        public ProcessResult<object> Registrar(PerfilRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoPerfil > 0)
                {
                    PerfilEntity Entity = EntityRepository.GetById(data.CodigoPerfil);

                    if (Entity != null)
                    {
                        Entity.CodigoPerfil = data.CodigoPerfil;
                        Entity.CodigoSistema = data.CodigoSistema;
                        Entity.Nombre = data.Nombre;
                        Entity.Descripcion = data.Descripcion;
                        
                        EntityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        EntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    PerfilEntity Entity = new PerfilEntity();
                    Entity.CodigoSistema = data.CodigoSistema;
                    Entity.Nombre = data.Nombre;
                    Entity.Descripcion = data.Descripcion;
                    
                    EntityRepository.Insertar(Entity);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<PerfilService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(PerfilRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                PerfilEntity Entity = EntityRepository.GetById(filtro.CodigoPerfil);

                if (Entity != null)
                {
                    EntityRepository.Eliminar(Entity.CodigoPerfil);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<PerfilService>(ex.Message);
            }
            return resultado;
        }
    }
}
