/* =========================================================
   VIBRA · core/store.js
   Capa de persistencia (localStorage). Los modelos son los
   únicos que deben hablar con el Store.
   ========================================================= */

const Store = {
  KEY: 'vibra_db_v2', // v2: servicios con equipos y cantidades

  cargar() {
    const raw = localStorage.getItem(Store.KEY);
    if (!raw) {
      const datos = Seed.datos();
      Store.guardar(datos);
      return datos;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Datos corruptos, se restablecen.', e);
      const datos = Seed.datos();
      Store.guardar(datos);
      return datos;
    }
  },

  guardar(db) { localStorage.setItem(Store.KEY, JSON.stringify(db)); },

  /** Devuelve una copia de la colección indicada. */
  tabla(nombre) { return Store.cargar()[nombre] || []; },

  /** Abre la base, aplica cambios con fn(db) y la vuelve a guardar. */
  transaccion(fn) {
    const db = Store.cargar();
    const resultado = fn(db);
    Store.guardar(db);
    return resultado;
  },

  /** Restablece los datos de demostración. */
  reiniciar() {
    ['vibra_db_v1', 'vibra_db_v2', 'vibra_sesion', 'vibra_borrador'].forEach((k) => localStorage.removeItem(k));
    sessionStorage.removeItem('vibra_sesion');
  },

  /** Avisa cuando otra pestaña cambia los datos (tiempo real entre paneles). */
  alCambiar(callback) {
    window.addEventListener('storage', (e) => {
      if (e.key === Store.KEY || e.key === null) callback();
    });
  },
};
