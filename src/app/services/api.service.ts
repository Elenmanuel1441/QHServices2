import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class ApiService{

    constructor(private http: HttpClient){}

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
  
}