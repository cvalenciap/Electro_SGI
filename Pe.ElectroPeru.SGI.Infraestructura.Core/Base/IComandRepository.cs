using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.Base
{
    /// <summary>
    /// Repository contract: for persisting an entity.
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface IComandRepository<T> : IDisposable
        where T : Entity
    {        
        /// <summary>
        /// Save an entity.
        /// </summary>
        /// <param name="obj">The entity to save.</param>
        void Insertar(T entity, IEntornoActualAplicacion entorno = null);
        /// <summary>
        /// Update an entity.
        /// </summary>
        /// <param name="obj">The entity to update.</param>
        void Editar(T entity, IEntornoActualAplicacion entorno = null);
        /// <summary>
        /// Actualzar an entity
        /// </summary>
        /// <param name="obj">The entity to update.</param>
        void Actualizar(params object[] llaves);
        /// <summary>
        /// Delete an entity
        /// </summary>
        /// <param name="obj">The entity to update.</param>
        void Eliminar(params object[] llaves);
        /// <summary>
        /// Delete an entity
        /// </summary>
        /// <param name="obj">The entity to update.</param>
        void Reactivar(params object[] llaves);
        /// <summary>
        /// Delete an entity
        /// </summary>
        /// <param name="entorno">Environment with the session</param>
        /// <param name="llaves">Code of The entity to delete.</param>
        void EliminarEntorno(IEntornoActualAplicacion entorno, params object[] llaves);
        /// <summary>
        /// Get Entity by primary key
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        T GetById(params object[] id);
        /// <summary>
        /// Get All Entity
        /// </summary>
        /// <returns></returns>
        IEnumerable<T> GetAll();
        /// <summary>
        /// Get Filtered Entity
        /// </summary>
        /// <returns></returns>
        IEnumerable<T> GetFiltered(Expression<Func<T, bool>> filter);
        /// <summary>
        /// Save all changes
        /// </summary>
        /// <returns></returns>
        int GuardarCambios();
    }
}
