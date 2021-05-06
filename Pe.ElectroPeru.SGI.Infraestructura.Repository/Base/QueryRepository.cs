using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Context;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;

namespace Pe.ElectroPeru.SGI.Infraestructura.Repository.Base
{
    public class QueryRepository<T> : IQueryRepository<T>
    {
        public IDbContextProvider dataBaseProvider { get; set; }

        public void Dispose()
        {
            if (this.dataBaseProvider != null)
            {
                this.dataBaseProvider.Dispose();
            }
        }
    }

    public class QueryRepositoryLogic<T> : IQueryRepositoryLogic<T>
        where T : Logic
    {
        public IDbContextProvider dataBaseProvider { get; set; }

        public void Dispose()
        {
            if (this.dataBaseProvider != null)
            {
                this.dataBaseProvider.Dispose();
            }
        }
    }
}
