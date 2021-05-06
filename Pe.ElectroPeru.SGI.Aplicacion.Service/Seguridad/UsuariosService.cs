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
    public class UsuariosService : GenericService, IUsuariosService
    {
        public IUsuariosLogicRepository LogicRepository { get; set; }

        public IUsuariosEntityRepository EntityRepository { get; set; }


        public ProcessResult<UsuariosResponse> Login(string usuario, string contrasena)
        {
            ProcessResult<UsuariosResponse> resultado = new ProcessResult<UsuariosResponse>();

            try
            {
                UsuariosLogic lista = LogicRepository.Login(usuario, contrasena);

                resultado.Result = new UsuariosResponse();

                if (resultado.Result != null)
                    resultado.Result = UsuariosAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<SistemaResponse> Sistema_x_Token(string token, int codigo_usuario)
        {
            ProcessResult<SistemaResponse> resultado = new ProcessResult<SistemaResponse>();

            try
            {
                SistemaLogic lista = LogicRepository.Sistema_x_Token(token, codigo_usuario);

                resultado.Result = new SistemaResponse();

                if (resultado.Result != null)
                    resultado.Result = SistemaAdapter.ObtenerPaginado(lista);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<OpcionResponse>> Usuario_x_Sistema(string usuario, int codigo_sistema)
        {
            ProcessResult<List<OpcionResponse>> resultado = new ProcessResult<List<OpcionResponse>>();

            try
            {
                List<OpcionLogic> lista = LogicRepository.Usuario_x_Sistema(usuario, codigo_sistema);

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
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<UsuariosResponse>> Buscar(UsuariosRequest filtro)
        {
            ProcessResult<List<UsuariosResponse>> resultado = new ProcessResult<List<UsuariosResponse>>();

            try
            {
                List<UsuariosLogic> lista = LogicRepository.Buscar(
                    filtro.CodigoUsuario,
                    filtro.Nombre,
                    filtro.Apellido,
                    filtro.NumDocumentoIdentidad,
                    filtro.Usuario,
                    filtro.NombreCargo,
                    filtro.CodigoCargo,
                    filtro.EstadoRegistro,
                    filtro.EstadoRegistroDescripcion,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<UsuariosResponse>();

                foreach (UsuariosLogic item in lista)
                {
                    UsuariosResponse Response = UsuariosAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<UsuariosResponse> Obtener(int codigo, int codigoSistema)
        {
            ProcessResult<UsuariosResponse> resultado = new ProcessResult<UsuariosResponse>();

            try
            {
                UsuariosLogic lista = LogicRepository.Obtener(codigo, codigoSistema);

                resultado.Result = new UsuariosResponse();

                if (resultado.Result != null)
                    resultado.Result = UsuariosAdapter.ObtenerPaginado(lista);                
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<List<UsuariosResponse>> Listar()
        {
            ProcessResult<List<UsuariosResponse>> resultado = new ProcessResult<List<UsuariosResponse>>();

            try
            {
                List<UsuariosLogic> lista = LogicRepository.Listar();

                resultado.Result = new List<UsuariosResponse>();

                foreach (UsuariosLogic item in lista)
                {
                    UsuariosResponse Response = UsuariosAdapter.ObtenerPaginado(item);
                    resultado.Result.Add(Response);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> Registrar(UsuariosRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                if (data.CodigoUsuario > 0)
                {
                    UsuariosEntity Entity = EntityRepository.GetById(data.CodigoUsuario);

                    if (Entity != null)
                    {
                        Entity.CodigoUsuario = data.CodigoUsuario;
                        Entity.Apellido = data.Apellido;
                        Entity.Nombre = data.Nombre;
                        Entity.EMail = data.EMail;
                        Entity.TipoDocumentoIdentidad = data.TipoDocumentoIdentidad;
                        Entity.NumDocumentoIdentidad = data.NumDocumentoIdentidad;
                        Entity.Usuario = data.Usuario;
                        Entity.Contrasena = data.Contrasena;
                        Entity.CodigoCargo = data.CodigoCargo;
                        Entity.NombreCargo = data.NombreCargo;

                        EntityRepository.Editar(Entity);
                        resultado.IsSuccess = true;
                        EntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    UsuariosEntity Entity = new UsuariosEntity();
                    Entity.Apellido = data.Apellido;
                    Entity.Nombre = data.Nombre;
                    Entity.EMail = data.EMail;
                    Entity.TipoDocumentoIdentidad = data.TipoDocumentoIdentidad;
                    Entity.NumDocumentoIdentidad = data.NumDocumentoIdentidad;
                    Entity.Usuario = data.Usuario;
                    Entity.Contrasena = data.Contrasena;
                    Entity.CodigoCargo = data.CodigoCargo;
                    Entity.NombreCargo = data.NombreCargo;

                    EntityRepository.Insertar(Entity);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> Eliminar(UsuariosRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;

            try
            {
                UsuariosEntity Entity = EntityRepository.GetById(filtro.CodigoUsuario);

                if (Entity != null)
                {
                    EntityRepository.Eliminar(Entity.CodigoUsuario);

                    resultado.IsSuccess = true;
                    EntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<UsuariosService>(ex.Message);
            }
            return resultado;
        }
    }
}
