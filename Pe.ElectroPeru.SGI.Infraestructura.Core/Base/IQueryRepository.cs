using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;
using System;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.Base
{
    public interface IQueryRepository<T> : IDisposable
    {
    }
    /// <summary>
    /// Repository contract: for Read a DTO.
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public interface IQueryRepositoryLogic<T> : IDisposable
         where T : Logic
    {
    }
}
