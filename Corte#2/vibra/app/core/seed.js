/* =========================================================
   VIBRA · core/seed.js
   Datos de demostración (los mismos que aparecen en los
   diseños). Se cargan la primera vez que se abre la app.
   ========================================================= */

const Seed = {
  datos() {
    const hace = (dias) => new Date(Date.now() - dias * 86400000).toISOString();

    return {
      secuencia: 1049,

      usuarios: [
        { id: 'u1', nombre: 'Admin', apellidos: '', email: 'admin@gmail.com', telefono: '', password: 'admin123', rol: 'admin' },
        { id: 'u2', nombre: 'Lucía', apellidos: 'Martín', email: 'lucia@email.com', telefono: '+34 611 222 333', password: 'vibra123', rol: 'cliente' },
      ],

      /* Clientes: los campos "previos" guardan el histórico anterior a
         las solicitudes que existen en la app. */
      clientes: [
        { id: 'c1', nombre: 'Lucía Martín', email: 'lucia@email.com', telefono: '+34 611 222 333', ciudad: 'Madrid', eventosPrevios: 0, facturacionPrevia: 0 },
        { id: 'c2', nombre: 'Carlos Vega', email: 'carlos@email.com', telefono: '+34 622 444 555', ciudad: 'Madrid', eventosPrevios: 1, facturacionPrevia: 2300 },
        { id: 'c3', nombre: 'Marta Alonso', email: 'marta@email.com', telefono: '+34 633 666 777', ciudad: 'Toledo', eventosPrevios: 0, facturacionPrevia: 0 },
        { id: 'c4', nombre: 'Studio Norte', email: 'hola@studionorte.com', telefono: '+34 910 222 333', ciudad: 'Madrid', eventosPrevios: 5, facturacionPrevia: 15150 },
        { id: 'c5', nombre: 'Ana Jiménez', email: 'ana@email.com', telefono: '+34 644 888 999', ciudad: 'Alcalá de Henares', eventosPrevios: 2, facturacionPrevia: 5230 },
      ],

      solicitudes: [
        {
          id: 'EV-1048', origen: 'web',
          cliente: { nombre: 'Lucía Martín', email: 'lucia@email.com', telefono: '+34 611 222 333' },
          tipo: 'Boda', fecha: '2026-06-14', invitados: '100 a 200', espacio: 'Interior y exterior', ciudad: 'Madrid',
          notas: 'Ceremonia al aire libre y banquete en el salón. Primer baile a las 21:00.',
          servicios: [
            { id: 'sonido', config: [{ id: 'grande', cantidad: 4 }, { id: 'bajo', cantidad: 2 }, { id: 'microfono', cantidad: 2 }] },
            { id: 'dj', config: null },
            { id: 'iluminacion', config: [{ id: 'par', cantidad: 12 }, { id: 'pulpo', cantidad: 2 }] },
            { id: 'efectos', config: [{ id: 'chispas', cantidad: 4 }, { id: 'humo', cantidad: 1 }] },
          ],
          precio: 2450, estado: 'nueva', cobro: 'pendiente',
          propuesta: {
            estado: 'borrador',
            conceptos: [
              { nombre: 'Sonido profesional', detalle: 'Sistema PA para 200 personas', precio: 650 },
              { nombre: 'DJ & animación', detalle: 'DJ profesional · 6 horas', precio: 720 },
              { nombre: 'Iluminación', detalle: 'Iluminación ambiental y pista', precio: 480 },
              { nombre: 'Efectos especiales', detalle: 'Chispas frías y máquina de humo', precio: 300 },
              { nombre: 'Transporte y montaje', detalle: 'Madrid y alrededores', precio: 200 },
            ],
            mensaje: 'Hola Lucía, hemos preparado esta propuesta según los detalles de vuestra boda. Todos los servicios incluyen montaje, pruebas y asistencia técnica.',
          },
          actividad: [{ titulo: 'Solicitud recibida', descripcion: 'La clienta envió la solicitud desde la web.', fecha: hace(2), inicial: true }],
          mensajes: [],
          creada: hace(2),
        },
        {
          id: 'EV-1047', origen: 'web',
          cliente: { nombre: 'Carlos Vega', email: 'carlos@email.com', telefono: '+34 622 444 555' },
          tipo: 'Evento corporativo', fecha: '2026-05-28', invitados: '100 a 200', espacio: 'Interior', ciudad: 'Madrid',
          notas: 'Presentación de producto con cóctel posterior.',
          servicios: [
            { id: 'sonido', config: [{ id: 'mediano', cantidad: 4 }, { id: 'bajo', cantidad: 2 }, { id: 'microfono', cantidad: 3 }] },
            { id: 'dj', config: null },
            { id: 'iluminacion', config: [{ id: 'par', cantidad: 8 }] },
          ],
          precio: 1820, estado: 'revision', cobro: 'pendiente', propuesta: null,
          actividad: [
            { titulo: 'Solicitud recibida', descripcion: 'El cliente envió la solicitud desde la web.', fecha: hace(6), inicial: true },
            { titulo: 'Estado actualizado: En revisión', descripcion: 'El administrador comenzó a revisar la solicitud.', fecha: hace(4) },
          ],
          mensajes: [],
          creada: hace(6),
        },
        {
          id: 'EV-1046', origen: 'web',
          cliente: { nombre: 'Marta & Alex', email: 'marta@email.com', telefono: '+34 633 666 777' },
          tipo: 'Fiesta privada', fecha: '2026-05-17', invitados: '50 a 100', espacio: 'Interior y exterior', ciudad: 'Toledo',
          notas: 'Fiesta de aniversario en una finca.',
          servicios: [
            { id: 'dj', config: null },
            { id: 'iluminacion', config: [{ id: 'pulpo', cantidad: 2 }, { id: 'bola', cantidad: 1 }] },
          ],
          precio: 980, estado: 'propuesta', cobro: 'pagado',
          propuesta: {
            estado: 'enviada',
            conceptos: [
              { nombre: 'DJ & animación', detalle: 'DJ profesional · 5 horas', precio: 520 },
              { nombre: 'Iluminación', detalle: 'Pulpo LED ×2 · Bola de espejos ×1', precio: 289.92 },
            ],
            mensaje: 'Hola Marta y Alex, aquí tenéis la propuesta para vuestra fiesta.',
          },
          actividad: [
            { titulo: 'Solicitud recibida', descripcion: 'La clienta envió la solicitud desde la web.', fecha: hace(12), inicial: true },
            { titulo: 'Propuesta enviada', descripcion: 'Se envió una propuesta de 980 € al cliente.', fecha: hace(9) },
          ],
          mensajes: [],
          creada: hace(12),
        },
        {
          id: 'EV-1045', origen: 'manual',
          cliente: { nombre: 'Studio Norte', email: 'hola@studionorte.com', telefono: '+34 910 222 333' },
          tipo: 'Concierto', fecha: '2026-05-09', invitados: 'Más de 200', espacio: 'Interior', ciudad: 'Madrid',
          notas: 'Sala Studio Norte',
          servicios: [
            { id: 'sonido', config: [{ id: 'grande', cantidad: 10 }, { id: 'bajo', cantidad: 4 }, { id: 'monitor', cantidad: 4 }, { id: 'consola', cantidad: 1 }] },
            { id: 'dj', config: null },
            { id: 'iluminacion', config: [{ id: 'movil', cantidad: 16 }, { id: 'laser', cantidad: 2 }] },
            { id: 'efectos', config: [{ id: 'humo', cantidad: 2 }, { id: 'confeti', cantidad: 2 }] },
            { id: 'musica', config: null },
          ],
          precio: 3600, estado: 'confirmada', cobro: 'pagado', propuesta: null,
          actividad: [{ titulo: 'Solicitud recibida', descripcion: 'El administrador creó este evento manualmente.', fecha: hace(20), inicial: true }],
          mensajes: [],
          creada: hace(20),
        },
      ],
    };
  },
};
