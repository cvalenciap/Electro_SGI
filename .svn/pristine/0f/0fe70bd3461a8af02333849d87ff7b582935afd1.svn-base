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
    public class ModuloService : GenericService, IModuloService
    {
        public IModuloLogicRepository LogicRepository { get; set; }

        public IModuloEntityRepository EntityRepository { get; set; }

        public ProcessResult<List<ModuloResponse>> Buscar(ModuloRequest filtro)
        {
            ProcessResult<List<ModuloResponse>> resultado = new ProcessResult<List<ModuloResponse>>();

            try
            {
                List<ModuloLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoModulo,
                    filtro.CodigoSistema,
                    filtro.Nombre,
                    filtro.Descripcion,
                    filtro.ModuloPadre,
                    filtro.ModuloPadreNombre,
                    filtro.Controlador,
                    filtro.Metodo,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<ModuloResponse>();

                foreach (ModuloLogic item in lista)
                {
                    ModuloResponse Response = ModuloAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ModuloService>(ex);
            }

            return resultado;
        }

        public ProcessResult<ModuloResponse> Obtener(float codigo)
        {
            ProcessResult<ModuloResponse> resultado = new ProcessResult<ModuloResponse>();

            try
            {
                ModuloLogic lista = LogicRepository.Obtener(codigo);

                resultado.Result = new ModuloResponse();

                if (resultado.Result != null)
                    resultado.Result = ModuloAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ModuloService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<ModuloResponse>> Listar()
        {
            ProcessResult<List<ModuloResponse>> resultado = new ProcessResult<List<ModuloResponse>>();

            try
            {
                List<ModuloLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<ModuloResponse>();

                foreach (ModuloLogic item in lista)
                {
                    ModuloResponse Response = ModuloAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ModuloService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> Registrar(ModuloRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoModulo > 0)
                {
                    ModuloEntity Entity = EntityRepository.GetById(data.CodigoModulo);

                    if (Entity != null)
                    {
                        Entity.CodigoModulo = data.CodigoModulo;
                        Entity.CodigoSistema = data.CodigoSistema;
                        Entity.Nombre = data.Nombre;
                        Entity.Descripcion = data.Descripcion;
                        Entity.ModuloPadre = data.ModuloPadre;
                        Entity.Glyphicon = data.Glyphicon;
                        Entity.Controlador = data.Controlador;
                        Entity.Metodo = data.Metodo;
                        Entity.RutaImagen = data.RutaImagen;

                        EntityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        EntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    ModuloEntity Entity = new ModuloEntity();
                    Entity.CodigoSistema = data.CodigoSistema;
                    Entity.Nombre = data.Nombre;
                    Entity.Descripcion = data.Descripcion;
                    Entity.ModuloPadre = data.ModuloPadre;
                    Entity.Glyphicon = data.Glyphicon;
                    Entity.Controlador = data.Controlador;
                    Entity.Metodo = data.Metodo;
                    Entity.RutaImagen = data.RutaImagen;

                    EntityRepository.Insertar(Entity);
                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<ModuloService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(ModuloRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                ModuloEntity Entity = EntityRepository.GetById(filtro.CodigoModulo);

                if (Entity != null)
                {
                    EntityRepository.Eliminar(Entity.CodigoModulo);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<ModuloService>(ex.Message);
            }
            return resultado;
        }
    }
}
