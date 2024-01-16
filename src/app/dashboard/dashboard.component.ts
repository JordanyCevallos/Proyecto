import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '¿Qué es un ticket?', cols: 1, rows: 1 },
          { title: '¿Qué se hace con los tickets una vez resueltos?', cols: 1, rows: 2 },
          { title: 'Registra tus tickets', cols: 1, rows: 1},
          { title: '¿Cómo resolver requerimientos?', cols: 1, rows:2},
          { title: 'Internet', cols: 1, rows: 1},
          { title: 'Portal Cautivo', cols: 1, rows: 1},
          { title: 'Sin Internet', cols: 1, rows: 1},
          { title: 'Por conexión Ethernet', cols: 1, rows: 1.5},
          { title: 'Instalaciones', cols: 1, rows: 2},
          { title: 'Carpetas compartidas', cols: 1, rows: 1},
          { title: 'FIRMA EC', cols: 1, rows: 2},
          { title: 'Activación de productos', cols: 1, rows: 1},
          { title: 'Impresoras', cols: 1, rows: 1},
          { title: 'Solicitud de equipo para proyección', cols: 1, rows: 1},
          { title: 'Correo', cols: 1, rows: 2},
          { title: 'Correo sin conexión', cols: 1, rows: 1},
          { title: 'Desbloqueo de equipo', cols: 1, rows: 1},
          { title: 'Informes', cols: 1, rows: 1},
          { title: 'Formateo', cols: 1, rows: 1.5},
          { title: 'OFFICE', cols: 1, rows: 1},
          { title: 'Firma EC', cols: 1, rows: 1},
          { title: 'Adobe', cols: 1, rows: 1},
          { title: 'Winrar', cols: 1, rows: 1},
          { title: 'OCS', cols: 1, rows: 1},
          { title: 'Certificado de navegación', cols: 1, rows: 1},
          { title: 'Levantar el perfil', cols: 1, rows: 2}
        ];
      }

      return [
        { title: '¿Qué es un ticket?', cols: 1, rows: 1 },
        { title: '¿Qué se hace con los tickets una vez resueltos?', cols: 1, rows: 2 },
        { title: 'Registra tus tickets', cols: 1, rows: 1 },
        { title: '¿Cómo resolver requerimientos?', cols: 1, rows: 2 },
        { title: 'Internet', cols: 1, rows: 1},
        { title: 'Portal Cautivo', cols: 1, rows: 1},
        { title: 'Sin Internet', cols: 1, rows: 1},
        { title: 'Por conexión Ethernet', cols: 1, rows: 1.5},
        { title: 'Instalaciones', cols: 1, rows: 2},
        { title: 'Carpetas compartidas', cols: 1, rows: 1},
        { title: 'FIRMA EC', cols: 1, rows: 1},
        { title: 'Activación de productos', cols: 1, rows: 1},
        { title: 'Impresoras', cols: 1, rows: 1},
        { title: 'Solicitud de equipo para proyección', cols: 1, rows: 1},
        { title: 'Correo', cols: 1, rows: 2},
        { title: 'Correo sin conexión', cols: 1, rows: 1},
        { title: 'Desbloqueo de equipo', cols: 1, rows: 1},
        { title: 'Informes', cols: 1, rows: 1},
        { title: 'Formateo', cols: 1, rows: 1.5},
        { title: 'OFFICE', cols: 1, rows: 1},
        { title: 'Firma EC', cols: 1, rows: 1},
        { title: 'Adobe', cols: 1, rows: 1},
        { title: 'Winrar', cols: 1, rows: 1},
        { title: 'OCS', cols: 1, rows: 1},
        { title: 'Certificado de navegación', cols: 1, rows: 1},
        { title: 'Levantar el perfil', cols: 1, rows: 2}

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
