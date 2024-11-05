import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AlertService } from '../servicios/alert.service';
import { Rol } from '../enums/enums';

export const pacienteGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService); 
  const alert = inject(AlertService); 

  const usuarioLogueado = authService.usuarioLogueado; 

  if (usuarioLogueado) {
    const role = await authService.getUserRole(usuarioLogueado); 
    if (role === Rol.Paciente) {
      return true; 
    }
  }

  alert.mostrarError('Acceso denegado. Solo para pacientes.'); 
  return false;
};
