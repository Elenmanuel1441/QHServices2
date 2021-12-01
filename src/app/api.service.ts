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
    return this.http.post('/backend/create.php',data);
  }
  getUsuarios()
  {
    return this.http.get('/backend/getusuarios.php');
  }
  deleUsuarios(id)
  {
    return this.http.delete('/backend/delete.php?id='+id);
  }
  getUsuario(id)
  {
    return this.http.get('/backend/getsingleusuario.php?id='+id);
  }
  UpdateUsuario(id, data)
  {
    return this.http.put('/backend/updateusuario.php?id='+id,data);
  }
  addPaciente(data)
  {
    return this.http.post('/backend/addpaciente.php',data);
  }
  getPacientes()
  {
    return this.http.get('/backend/getPacientes.php');
  }
  delePaciente(id)
  {
    return this.http.delete('/backend/deletePaciente.php?id_paciente='+id);
  }
  updatePaciente(id, data)
  {
    return this.http.put('/backend/updatePaciente.php?id='+id,data);
  }
  getPaciente(id)
  {
    return this.http.get('/backend/getSinglePaciente.php?id='+id);
  }
  addSonografia(data)
  {
    return this.http.post('/backend/addsonografia.php',data);
  }
  getSonografias()
  {
    return this.http.get('/backend/getSonografias.php');

  }
  getSonografia(id_col_sonografia)
  {
    return this.http.get('/backend/getSingleSonografia.php?id_col_sonografia='+id_col_sonografia);
  }
  updateSonografia(id_col_sonografia, data)
  {
    return this.http.put('/backend/updateSonografia.php?id_col_sonografia='+id_col_sonografia,data);
  }

  addRayosx(data)
  {
    return this.http.post('/backend/addRayosx.php',data);}
   
    
    addSonografiaAbdominal(data)
    {
      return this.http.post('/backend/addSonografiaAbdominal.php',data);}  
    
  
    
  addSonografiaObstetrica(data)
    {
      return this.http.post('/backend/addSonografiaObstetrica.php',data);}  
    
    getRayosx()
  {
    return this.http.get('/backend/getRayosx.php');

  }
  getRayox(id_col_rayosx)
  {
    return this.http.get('/backend/getSinglerayox.php?id_col_rayosx='+id_col_rayosx);
  }
  updateRayosx(id_col_rayosx, data)
  {
    return this.http.put('/backend/updateRayosx.php?id_col_rayosx='+id_col_rayosx,data);
  }
  addLaboratorio(data)
  {
    return this.http.post('/backend/addLaboratorio.php',data);}
   
    getLaboratorios()
  {
    return this.http.get('/backend/getLaboratorios.php');

  }
  getLaboratorio(id_col_laboratorio)
  {
    return this.http.get('/backend/getSinglelaboratorio.php?id_col_laboratorio='+id_col_laboratorio);
  }
  updateLaboratorio(id_col_laboratorio, data)
  {
    return this.http.put('/backend/updateLaboratorio.php?id_col_laboratorio='+id_col_laboratorio,data);
  }

  addOdontologia(data)
  {
    return this.http.post('/backend/addOdontologia.php',data);}
   
    getOdontologias()
  {
    return this.http.get('/backend/getOdontologia.php');

  }
  getOdontologia(id_col_odontologia)
  {
    return this.http.get('/backend/getSingleOdontologia.php?id_col_odontologia='+id_col_odontologia);
  }
  updateOdontologia(id_col_odontologia, data)
  {
    return this.http.put('/backend/updateOdontologia.php?id_col_odontologia='+id_col_odontologia,data);
  }

  getCount_rayos_x()
  {
    return this.http.get('/backend/rayos_x_count.php');

  }

  getCount_sonografia()
  {
    return this.http.get('/backend/sonografia_count.php');

  }

  getCount_laboratorio()
  {
    return this.http.get('/backend/laboratorio_count.php');

  }

  getCount_odontologia()
  {
    return this.http.get('/backend/odontologia_count.php');

  }

  addAnalisis(data)
  {
    return this.http.post('/backend/addAnalisis.php',data);}  


    getAnalisis(id_paciente)
  {
    return this.http.get('/backend/getAnalisis.php?id_paciente='+id_paciente);
  }
  ReportAbdominal()
  {
    return this.http.get('/backend/reportAbdominal.php');
  }
  cancelAnalisis(id_paciente_analisis)
  {
    return this.http.get('/backend/cancelAnalisis.php?id_paciente_analisis='+id_paciente_analisis);
  }
  getLaboratoriosBio()
  {
    return this.http.get('/backend/getLaboratoriosBio.php');

  }
  getLaboratorioBio(id_col_laboratorio)
  {
    return this.http.get('/backend/getSinglelaboratorioBio.php?id_col_laboratorio='+id_col_laboratorio);
  }
  updateLaboratorioBio(id_col_laboratorio, data)
  {
    return this.http.put('/backend/updateLaboratorioBio.php?id_col_laboratorio='+id_col_laboratorio,data);
  }
  
  getAnalisi(id_paciente_analisis)
  {
    return this.http.get('/backend/getSingleAnalisi.php?id_paciente_analisis='+id_paciente_analisis);
  }
  completeAnalisis(id_paciente_analisis)
  {
    return this.http.get('/backend/completeAnalisis.php?id_paciente_analisis='+id_paciente_analisis);
  }
  getLaboratoriosEntrega()
  {
    return this.http.get('/backend/getLaboratoriosEntrega.php');
  }
  getAnalisisEntrega(id_paciente)
  {
    return this.http.get('/backend/getAnalisisEntrega.php?id_paciente='+id_paciente);
  }
  getLaboratorioEntrega(id_col_laboratorio)
  {
    return this.http.get('/backend/getSinglelaboratorioEntrega.php?id_col_laboratorio='+id_col_laboratorio);
  }
  deliverAnalisis(id_paciente_analisis)
  {
    return this.http.get('/backend/deliverAnalisis.php?id_paciente_analisis='+id_paciente_analisis);
  }
  updateLaboratorioEntrega(id_col_laboratorio, data)
  {
    return this.http.put('/backend/updateLaboratorioEntrega.php?id_col_laboratorio='+id_col_laboratorio,data);
  }
  getCountSonoAbdoNoAseg()
  {
    return this.http.get('/backend/ReportSonoAbdominalNoSeg.php');

  }
  getCountSonoAbdoSeg()
  {
    return this.http.get('/backend/ReportSonoAbdoAseg.php');

  }
  getCountSonObitoSeg()
  {
    return this.http.get('/backend/ReportSonoObitoAseg.php');

  }
  getCountSonbitoNoSeg()
  {
    return this.http.get('/backend/ReportSonoObitoNoAseg.php');

  }
  getCountLabAseNaseg()
  {
    return this.http.get('/backend/ReportLabAsegNaseg.php');

  }
  getCountAnalisisAseNaseg()
  {
    return this.http.get('/backend/ReportLabAnalisisAsegNaseg.php');

  }
  getChart()
  {
    return this.http.get('/backend/chart.php');

  }
  getCantPacAreaMes()
  {
    return this.http.get('http://localhost/proyecto/backend/ChartCantPacAreaMes.php');

  }
  
}

