//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.18010
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Pe.ElectroPeru.SGI.Infraestructura.Proxy.OracleService {
    using System.Data;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="OracleService.ServiceSoap")]
    public interface ServiceSoap {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerPosicionCaja", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet ObtenerPosicionCaja(string ruc, string codproyecto, string periodo, string mes);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerPosicionCaja", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> ObtenerPosicionCajaAsync(string ruc, string codproyecto, string periodo, string mes);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ProveedoresEnUso", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet ProveedoresEnUso(string pRUC, string pRUC2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ProveedoresEnUso", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> ProveedoresEnUsoAsync(string pRUC, string pRUC2);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerProveedoresTodos", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet ObtenerProveedoresTodos(string busqueda);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerProveedoresTodos", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> ObtenerProveedoresTodosAsync(string busqueda);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerProveedores", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet ObtenerProveedores(string busqueda);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerProveedores", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> ObtenerProveedoresAsync(string busqueda);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerClientes", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet ObtenerClientes(string busqueda);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerClientes", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> ObtenerClientesAsync(string busqueda);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerFrentes", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet ObtenerFrentes(string RUC, string CodProyecto);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerFrentes", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> ObtenerFrentesAsync(string RUC, string CodProyecto);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerPartidas", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet ObtenerPartidas(string RUC, string CodProyecto);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerPartidas", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> ObtenerPartidasAsync(string RUC, string CodProyecto);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/CostosAcumulados", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        System.Data.DataSet CostosAcumulados(string CodProyecto, string Periodo);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/CostosAcumulados", ReplyAction="*")]
        System.Threading.Tasks.Task<System.Data.DataSet> CostosAcumuladosAsync(string CodProyecto, string Periodo);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerCostosRealyAcumulado", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        string ObtenerCostosRealyAcumulado(string Ruc, string CodigoObra, string Ejercicio, string Periodo, string CodigoMoneda);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ObtenerCostosRealyAcumulado", ReplyAction="*")]
        System.Threading.Tasks.Task<string> ObtenerCostosRealyAcumuladoAsync(string Ruc, string CodigoObra, string Ejercicio, string Periodo, string CodigoMoneda);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ServiceSoapChannel : Pe.ElectroPeru.SGI.Infraestructura.Proxy.OracleService.ServiceSoap, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ServiceSoapClient : System.ServiceModel.ClientBase<Pe.ElectroPeru.SGI.Infraestructura.Proxy.OracleService.ServiceSoap>, Pe.ElectroPeru.SGI.Infraestructura.Proxy.OracleService.ServiceSoap {
        
        public ServiceSoapClient() {
        }
        
        public ServiceSoapClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public ServiceSoapClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceSoapClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public ServiceSoapClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public System.Data.DataSet ObtenerPosicionCaja(string ruc, string codproyecto, string periodo, string mes) {
            return base.Channel.ObtenerPosicionCaja(ruc, codproyecto, periodo, mes);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> ObtenerPosicionCajaAsync(string ruc, string codproyecto, string periodo, string mes) {
            return base.Channel.ObtenerPosicionCajaAsync(ruc, codproyecto, periodo, mes);
        }
        
        public System.Data.DataSet ProveedoresEnUso(string pRUC, string pRUC2) {
            return base.Channel.ProveedoresEnUso(pRUC, pRUC2);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> ProveedoresEnUsoAsync(string pRUC, string pRUC2) {
            return base.Channel.ProveedoresEnUsoAsync(pRUC, pRUC2);
        }
        
        public System.Data.DataSet ObtenerProveedoresTodos(string busqueda) {
            return base.Channel.ObtenerProveedoresTodos(busqueda);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> ObtenerProveedoresTodosAsync(string busqueda) {
            return base.Channel.ObtenerProveedoresTodosAsync(busqueda);
        }
        
        public System.Data.DataSet ObtenerProveedores(string busqueda) {
            return base.Channel.ObtenerProveedores(busqueda);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> ObtenerProveedoresAsync(string busqueda) {
            return base.Channel.ObtenerProveedoresAsync(busqueda);
        }
        
        public System.Data.DataSet ObtenerClientes(string busqueda) {
            return base.Channel.ObtenerClientes(busqueda);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> ObtenerClientesAsync(string busqueda) {
            return base.Channel.ObtenerClientesAsync(busqueda);
        }
        
        public System.Data.DataSet ObtenerFrentes(string RUC, string CodProyecto) {
            return base.Channel.ObtenerFrentes(RUC, CodProyecto);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> ObtenerFrentesAsync(string RUC, string CodProyecto) {
            return base.Channel.ObtenerFrentesAsync(RUC, CodProyecto);
        }
        
        public System.Data.DataSet ObtenerPartidas(string RUC, string CodProyecto) {
            return base.Channel.ObtenerPartidas(RUC, CodProyecto);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> ObtenerPartidasAsync(string RUC, string CodProyecto) {
            return base.Channel.ObtenerPartidasAsync(RUC, CodProyecto);
        }
        
        public System.Data.DataSet CostosAcumulados(string CodProyecto, string Periodo) {
            return base.Channel.CostosAcumulados(CodProyecto, Periodo);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> CostosAcumuladosAsync(string CodProyecto, string Periodo) {
            return base.Channel.CostosAcumuladosAsync(CodProyecto, Periodo);
        }
        
        public string ObtenerCostosRealyAcumulado(string Ruc, string CodigoObra, string Ejercicio, string Periodo, string CodigoMoneda) {
            return base.Channel.ObtenerCostosRealyAcumulado(Ruc, CodigoObra, Ejercicio, Periodo, CodigoMoneda);
        }
        
        public System.Threading.Tasks.Task<string> ObtenerCostosRealyAcumuladoAsync(string Ruc, string CodigoObra, string Ejercicio, string Periodo, string CodigoMoneda) {
            return base.Channel.ObtenerCostosRealyAcumuladoAsync(Ruc, CodigoObra, Ejercicio, Periodo, CodigoMoneda);
        }
    }
}
