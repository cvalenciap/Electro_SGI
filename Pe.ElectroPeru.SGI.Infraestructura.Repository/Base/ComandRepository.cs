using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;
using System.Linq;
using System.Data.Entity;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Context;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Base
{
    /// <summary>
    /// Repository base for all wite model
    /// </summary>
    public abstract class ComandRepository<T> : DbContext, IComandRepository<T>
         where T : Entity
    {
        public IDbContextProvider dataBaseProvider { get; set; }
        //public IDbContextProvider dataBaseProviderAudit { get; set; }
        public IEntornoActualAplicacion entornoActualAplicacion { get; set; }

        public void Insertar(T entidad, IEntornoActualAplicacion entorno = null)
        {
            entidad.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
            entidad.UsuarioCreacion = Login.Obtener.Usuario.Login();
            entidad.FechaCreacion = DateTime.Now;
            entidad.TerminalCreacion = "::1";//comentado por Angel: entorno == null ? entornoActualAplicacion.Terminal : entorno.Terminal;

            this.dataBaseProvider.DbSet<T>().Add(entidad);
            //RegistrarAuditoria(entidad);
        }

        public void Editar(T entidad, IEntornoActualAplicacion entorno = null)
        {
            entidad.UsuarioModificacion = Login.Obtener.Usuario.Login();
            entidad.FechaModificacion = DateTime.Now;
            entidad.TerminalModificacion = entorno == null ? entornoActualAplicacion.Terminal : entorno.Terminal;

            this.dataBaseProvider.Modified(entidad);
            //RegistrarAuditoria(entidad);
        }
        public void Actualizar(params object[] llaves)
        {
            var entidadEliminar = this.GetById(llaves);
            entidadEliminar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
            entidadEliminar.UsuarioModificacion = entornoActualAplicacion.UsuarioSession;
            entidadEliminar.FechaModificacion = DateTime.Now;
            entidadEliminar.TerminalModificacion = entornoActualAplicacion.Terminal;
        }

        public void Eliminar(params object[] llaves)
        {
            var entidadEliminar = this.GetById(llaves);
            entidadEliminar.EstadoRegistro = DatosConstantes.EstadoRegistro.Inactivo;
            entidadEliminar.UsuarioModificacion = "alosno";//entornoActualAplicacion.UsuarioSession;
            entidadEliminar.FechaModificacion = DateTime.Now;
            entidadEliminar.TerminalModificacion = "::1";//entornoActualAplicacion.Terminal;

           // RegistrarAuditoria(entidadEliminar);
        }

        public void Reactivar(params object[] llaves)
        {
            var entidadEliminar = this.GetById(llaves);
            entidadEliminar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
            entidadEliminar.UsuarioModificacion = entornoActualAplicacion.UsuarioSession;
            entidadEliminar.FechaModificacion = DateTime.Now;
            entidadEliminar.TerminalModificacion = entornoActualAplicacion.Terminal;
        }

        public void EliminarEntorno( IEntornoActualAplicacion entorno, params object[] llaves)
        {
            var entidadEliminar = this.GetById(llaves);
            entidadEliminar.EstadoRegistro = DatosConstantes.EstadoRegistro.Inactivo;
            entidadEliminar.UsuarioModificacion = entorno == null ? entornoActualAplicacion.UsuarioSession : entorno.UsuarioSession;
            entidadEliminar.FechaModificacion = DateTime.Now;
            entidadEliminar.TerminalModificacion = entorno == null ? entornoActualAplicacion.Terminal : entorno.Terminal;

            //RegistrarAuditoria(entidadEliminar);
        }

        public T GetById(params object[] id)
        {
            return this.dataBaseProvider.DbSet<T>().Find(id);
        }

        public int GuardarCambios()
        {
            return this.dataBaseProvider.Persist();
        }

        //public void RegistrarAuditoria(T entity)
        //{

        //    var hasTraceAudit = typeof(T).GetCustomAttribute<TraceAuditAttribute>();
        //    if (hasTraceAudit != null)
        //    {
        //        using (IDbContextProvider dataBaseProviderAudit = new SGSAAuditDbContextProvider())
        //        {
        //            dataBaseProviderAudit.DbSet<T>().Add(entity);
        //            dataBaseProviderAudit.Persist();
        //        }
        //    }
        //}

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IEnumerable<T> GetAll()
        {
            return this.dataBaseProvider.DbSet<T>().ToListAsync().Result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IEnumerable<T> GetFiltered(Expression<Func<T, bool>> filter)
        {
            return this.dataBaseProvider.DbSet<T>().Where(filter).ToListAsync().Result;
        }

        public void Dispose()
        {
            if (this.dataBaseProvider != null)
            {
                this.dataBaseProvider.Dispose();
            }
        }
    }
}
