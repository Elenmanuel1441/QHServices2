import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  addusuario(data)
  {
    return this.http.post('http://localhost/proyecto/backend/create.php',data);
  }
  getUsuarios()
  {
    return this.http.get('http://localhost/proyecto/backend/getusuarios.php');
  }
  deleUsuarios(id)
  {
    return this.http.delete('http://localhost/proyecto/backend/delete.php?id='+id);
  }
  getUsuario(id)
  {
    return this.http.get('http://localhost/proyecto/backend/getsingleusuario.php?id='+id);
  }
  UpdateUsuario(id, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updateusuario.php?id='+id,data);
  }
  addPaciente(data)
  {
    return this.http.post('http://localhost/proyecto/backend/addpaciente.php',data);
  }
  getPacientes()
  {
    return this.http.get('http://localhost/proyecto/backend/getPacientes.php');
  }
  delePaciente(id)
  {
    return this.http.delete('http://localhost/proyecto/backend/deletePaciente.php?id_paciente='+id);
  }
  updatePaciente(id, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updatePaciente.php?id='+id,data);
  }
  getPaciente(id)
  {
    return this.http.get('http://localhost/proyecto/backend/getSinglePaciente.php?id='+id);
  }
  addSonografia(data)
  {
    return this.http.post('http://localhost/proyecto/backend/addsonografia.php',data);
  }
  getSonografias()
  {
    return this.http.get('http://localhost/proyecto/backend/getSonografias.php');

  }
  getSonografia(id_col_sonografia)
  {
    return this.http.get('http://localhost/proyecto/backend/getSingleSonografia.php?id_col_sonografia='+id_col_sonografia);
  }
  updateSonografia(id_col_sonografia, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updateSonografia.php?id_col_sonografia='+id_col_sonografia,data);
  }

  addRayosx(data)
  {
    return this.http.post('http://localhost/proyecto/backend/addRayosx.php',data);}
   
    
    addSonografiaAbdominal(data)
    {
      return this.http.post('http://localhost/proyecto/backend/addSonografiaAbdominal.php',data);}  
    
  
    
  addSonografiaObstetrica(data)
    {
      return this.http.post('http://localhost/proyecto/backend/addSonografiaObstetrica.php',data);}  
    
    getRayosx()
  {
    return this.http.get('http://localhost/proyecto/backend/getRayosx.php');

  }
  getRayox(id_col_rayosx)
  {
    return this.http.get('http://localhost/proyecto/backend/getSinglerayox.php?id_col_rayosx='+id_col_rayosx);
  }
  updateRayosx(id_col_rayosx, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updateRayosx.php?id_col_rayosx='+id_col_rayosx,data);
  }
  addLaboratorio(data)
  {
    return this.http.post('http://localhost/proyecto/backend/addLaboratorio.php',data);}
   
    getLaboratorios()
  {
    return this.http.get('http://localhost/proyecto/backend/getLaboratorios.php');

  }
  getLaboratorio(id_col_laboratorio)
  {
    return this.http.get('http://localhost/proyecto/backend/getSinglelaboratorio.php?id_col_laboratorio='+id_col_laboratorio);
  }
  updateLaboratorio(id_col_laboratorio, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updateLaboratorio.php?id_col_laboratorio='+id_col_laboratorio,data);
  }

  addOdontologia(data)
  {
    return this.http.post('http://localhost/proyecto/backend/addOdontologia.php',data);}
   
    getOdontologias()
  {
    return this.http.get('http://localhost/proyecto/backend/getOdontologia.php');

  }
  getOdontologia(id_col_odontologia)
  {
    return this.http.get('http://localhost/proyecto/backend/getSingleOdontologia.php?id_col_odontologia='+id_col_odontologia);
  }
  updateOdontologia(id_col_odontologia, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updateOdontologia.php?id_col_odontologia='+id_col_odontologia,data);
  }

  getCount_rayos_x()
  {
    return this.http.get('http://localhost/proyecto/backend/rayos_x_count.php');

  }

  getCount_sonografia()
  {
    return this.http.get('http://localhost/proyecto/backend/sonografia_count.php');

  }

  getCount_laboratorio()
  {
    return this.http.get('http://localhost/proyecto/backend/laboratorio_count.php');

  }

  getCount_odontologia()
  {
    return this.http.get('http://localhost/proyecto/backend/odontologia_count.php');

  }

  addAnalisis(data)
  {
    return this.http.post('http://localhost/proyecto/backend/addAnalisis.php',data);}  


    getAnalisis(id_paciente)
  {
    return this.http.get('http://localhost/proyecto/backend/getAnalisis.php?id_paciente='+id_paciente);
  }
  ReportAbdominal()
  {
    return this.http.get('http://localhost/proyecto/backend/reportAbdominal.php');
  }
  cancelAnalisis(id_paciente_analisis)
  {
    return this.http.get('http://localhost/proyecto/backend/cancelAnalisis.php?id_paciente_analisis='+id_paciente_analisis);
  }
  getLaboratoriosBio()
  {
    return this.http.get('http://localhost/proyecto/backend/getLaboratoriosBio.php');

  }
  getLaboratorioBio(id_col_laboratorio)
  {
    return this.http.get('http://localhost/proyecto/backend/getSinglelaboratorioBio.php?id_col_laboratorio='+id_col_laboratorio);
  }
  updateLaboratorioBio(id_col_laboratorio, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updateLaboratorioBio.php?id_col_laboratorio='+id_col_laboratorio,data);
  }
  
  getAnalisi(id_paciente_analisis)
  {
    return this.http.get('http://localhost/proyecto/backend/getSingleAnalisi.php?id_paciente_analisis='+id_paciente_analisis);
  }
  completeAnalisis(id_paciente_analisis)
  {
    return this.http.get('http://localhost/proyecto/backend/completeAnalisis.php?id_paciente_analisis='+id_paciente_analisis);
  }
  getLaboratoriosEntrega()
  {
    return this.http.get('http://localhost/proyecto/backend/getLaboratoriosEntrega.php');
  }
  getAnalisisEntrega(id_paciente)
  {
    return this.http.get('http://localhost/proyecto/backend/getAnalisisEntrega.php?id_paciente='+id_paciente);
  }
  getLaboratorioEntrega(id_col_laboratorio)
  {
    return this.http.get('http://localhost/proyecto/backend/getSinglelaboratorioEntrega.php?id_col_laboratorio='+id_col_laboratorio);
  }
  deliverAnalisis(id_paciente_analisis)
  {
    return this.http.get('http://localhost/proyecto/backend/deliverAnalisis.php?id_paciente_analisis='+id_paciente_analisis);
  }
  updateLaboratorioEntrega(id_col_laboratorio, data)
  {
    return this.http.put('http://localhost/proyecto/backend/updateLaboratorioEntrega.php?id_col_laboratorio='+id_col_laboratorio,data);
  }
  getCountSonoAbdoNoAseg()
  {
    return this.http.get('http://localhost/proyecto/backend/ReportSonoAbdominalNoSeg.php');

  }
  getCountSonoAbdoSeg()
  {
    return this.http.get('http://localhost/proyecto/backend/ReportSonoAbdoAseg.php');

  }
  getCountSonObitoSeg()
  {
    return this.http.get('http://localhost/proyecto/backend/ReportSonoObitoAseg.php');

  }
  getCountSonbitoNoSeg()
  {
    return this.http.get('http://localhost/proyecto/backend/ReportSonoObitoNoAseg.php');

  }
  getCountLabAseNaseg()
  {
    return this.http.get('http://localhost/proyecto/backend/ReportLabAsegNaseg.php');

  }
  getCountAnalisisAseNaseg()
  {
    return this.http.get('http://localhost/proyecto/backend/ReportLabAnalisisAsegNaseg.php');

  }
  getChart()
  {
    return this.http.get('http://localhost/proyecto/backend/chart.php');

  }
  getCantPacAreaMes()
  {
    return this.http.get('http://localhost/proyecto/backend/ChartCantPacAreaMes.php');

  }
  getPacResul()
  {
    return this.http.get('http://localhost/proyecto/backend/CharPacResul.php');

  }
  getCountPacEntEspResul()
  {
    return this.http.get('http://localhost/proyecto/backend/GetCountPacEspEntResul.php');

  }
  getCountPacSexo()
  {
    return this.http.get('http://localhost/proyecto/backend/getCountCanPacSexo.php');

  }
  getCountCantPacRegist()
  {
    return this.http.get('http://localhost/proyecto/backend/getCantPacRegistrados.php');

  }
  
}

