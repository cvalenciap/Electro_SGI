using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Base;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Politicas;
using System;
using System.Collections.Generic;
using System.IO;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Base
{
    /// <summary>
    /// Implementación base generica de servicios de aplicación
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public abstract class GenericService : IGenericService
    {
        
        private bool Disposed = false;
        /// <summary>
        /// Finaliza el objeto
        /// </summary>
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing)
        {
            if (!this.Disposed)
            {
                if (disposing)
                {

                }
            }
            this.Disposed = true;
        }
        /// <summary>
        /// Finaliza el objeto
        /// </summary>
        /// <param name="disposing"></param>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }                       
    }
}
