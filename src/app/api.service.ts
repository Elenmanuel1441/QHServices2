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
    return this.http.put('http://localhost/proyecto/backend/updateSonografia.php?id_col_sonografia='+id_col_sonografia,data);}
}
