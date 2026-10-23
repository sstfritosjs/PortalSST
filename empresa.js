/* ============================================================
   empresa.js — Sitio multiempresa (tu marca)
   Ábrelo con configurar-empresa.html → «Tu sitio multiempresa (tu marca)»
   para poner el nombre de tu producto, tus datos y tu logo.
   Las empresas cliente van en empresas/<código>.json.
   ============================================================ */

const EMPRESA = {
  "nombre": "Tu empresa asesora S.A.S.",
  "nombreCorto": "TU MARCA",
  "nit": "",
  "subtitulo": "Sistema de Gestión SST",
  "logo": "",
  "colorMarca": "#1f3b57",
  "sinConfigurar": true,
  "formatos": {
    "SSTA-F-005": {
      "codigo": "SSTA-F-005",
      "titulo": "Control de asistencia a capacitación, eventos y reuniones",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-006": {
      "codigo": "SSTA-F-006",
      "titulo": "Inspección de EPP",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-007": {
      "codigo": "SSTA-F-007",
      "titulo": "Análisis de Trabajo Seguro (ATS)",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-116": {
      "codigo": "SSTA-F-116",
      "titulo": "Permiso de trabajo en alturas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-117": {
      "codigo": "SSTA-F-117",
      "titulo": "Permiso de espacios confinados",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-118": {
      "codigo": "SSTA-F-118",
      "titulo": "Permiso de izajes de cargas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-119": {
      "codigo": "SSTA-F-119",
      "titulo": "Permiso de trabajo en caliente",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-147": {
      "codigo": "SSTA-F-147",
      "titulo": "Inspección de EPP de brigadistas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-149": {
      "codigo": "SSTA-F-149",
      "titulo": "Anexo de personal autorizado",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SSTA-F-180": {
      "codigo": "SSTA-F-180",
      "titulo": "Permiso de trabajo eléctrico",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-REPORTE": {
      "codigo": "",
      "titulo": "Reporte e investigación de actos, condiciones, incidentes y accidentes",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PLAN": {
      "codigo": "",
      "titulo": "Plan de acción del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-HABILITACION": {
      "codigo": "",
      "titulo": "Estado de habilitación del personal",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-INSPECCION": {
      "codigo": "",
      "titulo": "Inspección planeada / preoperacional",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-INVENTARIO": {
      "codigo": "",
      "titulo": "Inventario de equipos e inspecciones",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-INDICADORES": {
      "codigo": "",
      "titulo": "Informe de indicadores del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-COMITE-CONFORMACION": {
      "codigo": "",
      "titulo": "Conformación de comités (COPASST / Convivencia)",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-EMERGENCIAS-ACTA": {
      "codigo": "",
      "titulo": "Acta de reunión del comité de emergencias",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-COPASST-ACTA": {
      "codigo": "",
      "titulo": "Acta de reunión del COPASST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CONVIVENCIA-ACTA": {
      "codigo": "",
      "titulo": "Acta de reunión del Comité de Convivencia Laboral",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CONVIVENCIA-QUEJA": {
      "codigo": "",
      "titulo": "Expediente de queja (Comité de Convivencia)",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CONVIVENCIA-INFORME": {
      "codigo": "",
      "titulo": "Informe de gestión del Comité de Convivencia",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-AUDITORIA": {
      "codigo": "",
      "titulo": "Informe de auditoría del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-AUDITORIA-PROGRAMA": {
      "codigo": "",
      "titulo": "Programa anual de auditorías",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PLAN-ANUAL": {
      "codigo": "",
      "titulo": "Plan anual de trabajo del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PLAN-CAPACITACION": {
      "codigo": "",
      "titulo": "Plan de capacitación",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-MATRIZ-PELIGROS": {
      "codigo": "",
      "titulo": "Matriz de identificación de peligros y valoración de riesgos",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-SUSTANCIAS": {
      "codigo": "",
      "titulo": "Inventario de sustancias químicas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PLAN-EMERGENCIAS": {
      "codigo": "",
      "titulo": "Plan de prevención, preparación y respuesta ante emergencias",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-SIMULACRO": {
      "codigo": "",
      "titulo": "Informe de simulacro",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROFESIOGRAMA": {
      "codigo": "",
      "titulo": "Profesiograma",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-EXAMENES": {
      "codigo": "",
      "titulo": "Programación de evaluaciones médicas ocupacionales",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-AUSENTISMO": {
      "codigo": "",
      "titulo": "Informe de ausentismo",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-POLITICA": {
      "codigo": "",
      "titulo": "Política de seguridad y salud en el trabajo",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-MATRIZ-LEGAL": {
      "codigo": "",
      "titulo": "Matriz de requisitos legales",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-LISTADO-MAESTRO": {
      "codigo": "",
      "titulo": "Listado maestro de documentos",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROVEEDORES": {
      "codigo": "",
      "titulo": "Evaluación de proveedores y contratistas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-EVAL-PROVEEDOR": {
      "codigo": "",
      "titulo": "Evaluación y reevaluación de proveedores, contratistas y subcontratistas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-REVISION-DIRECCION": {
      "codigo": "",
      "titulo": "Revisión por la alta dirección",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-RENDICION": {
      "codigo": "",
      "titulo": "Rendición de cuentas en SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CONTRATISTA": {
      "codigo": "",
      "titulo": "Ficha y documentos del contratista",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-INGRESO-CONTRATISTA": {
      "codigo": "",
      "titulo": "Control de ingreso de contratistas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-MATRIZ-EPP": {
      "codigo": "",
      "titulo": "Matriz de elementos de protección personal por cargo",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-ENTREGA-EPP": {
      "codigo": "",
      "titulo": "Registro de entrega de elementos de protección personal",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-INDUCCION": {
      "codigo": "",
      "titulo": "Inducción y reinducción en SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROGRAMA-ALTO-RIESGO": {
      "codigo": "",
      "titulo": "Programas de tareas de alto riesgo",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PESV": {
      "codigo": "",
      "titulo": "Plan estratégico de seguridad vial",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-TABLERO-GERENCIA": {
      "codigo": "",
      "titulo": "Informe del SG-SST para la gerencia",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-REPORTE-ANUAL-0312": {
      "codigo": "",
      "titulo": "Reporte anual de estándares mínimos",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-ASPECTOS-AMBIENTALES": {
      "codigo": "",
      "titulo": "Matriz de aspectos e impactos ambientales",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-RESIDUOS": {
      "codigo": "",
      "titulo": "Registro de generación de residuos",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-INFORME-ASESORIA": {
      "codigo": "",
      "titulo": "Informe de asesoría en SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-COMPATIBILIDAD": {
      "codigo": "",
      "titulo": "Matriz de compatibilidad de sustancias químicas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-GESTION-QUIMICA": {
      "codigo": "",
      "titulo": "Gestión del riesgo químico (SGA)",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-LUGARES-QUIMICOS": {
      "codigo": "",
      "titulo": "Lugares de almacenamiento de sustancias químicas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CONSUMOS": {
      "codigo": "",
      "titulo": "Informe de consumos de agua, energía y combustibles",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CRONOGRAMA-INSP": {
      "codigo": "",
      "titulo": "Cronograma de inspecciones",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-OBJETIVOS": {
      "codigo": "",
      "titulo": "Objetivos del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-DESIGNACION": {
      "codigo": "",
      "titulo": "Designación del responsable del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-ROLES": {
      "codigo": "",
      "titulo": "Roles y responsabilidades en el SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-RECURSOS": {
      "codigo": "",
      "titulo": "Asignación de recursos para el SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-REGLAMENTO": {
      "codigo": "",
      "titulo": "Reglamento de higiene y seguridad industrial",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-PELIGROS": {
      "codigo": "",
      "titulo": "Procedimiento de identificación de peligros, evaluación y valoración de riesgos",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-INVESTIGACION": {
      "codigo": "",
      "titulo": "Procedimiento de reporte e investigación de incidentes, accidentes de trabajo y enfermedades laborales",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-ACCIONES": {
      "codigo": "",
      "titulo": "Procedimiento de acciones correctivas, preventivas y de mejora",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-CAMBIO": {
      "codigo": "",
      "titulo": "Procedimiento de gestión del cambio",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-AUDITORIA": {
      "codigo": "",
      "titulo": "Procedimiento de auditoría interna del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-REVISION": {
      "codigo": "",
      "titulo": "Procedimiento de revisión por la alta dirección",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-DOCUMENTOS": {
      "codigo": "",
      "titulo": "Procedimiento de control de documentos y conservación de registros",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-COMUNICACION": {
      "codigo": "",
      "titulo": "Procedimiento de comunicación, participación y consulta",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-COMPRAS": {
      "codigo": "",
      "titulo": "Procedimiento de adquisiciones y contratación con criterios de SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROC-EMERGENCIAS": {
      "codigo": "",
      "titulo": "Procedimiento de prevención, preparación y respuesta ante emergencias",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROG-CAPACITACION": {
      "codigo": "",
      "titulo": "Programa de capacitación, inducción y reinducción en SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROG-INSPECCIONES": {
      "codigo": "",
      "titulo": "Programa de inspecciones planeadas",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PROG-MEDICO": {
      "codigo": "",
      "titulo": "Programa de evaluaciones médicas ocupacionales",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-MANUAL": {
      "codigo": "",
      "titulo": "Manual del Sistema de Gestión de la Seguridad y Salud en el Trabajo",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CONTEXTO": {
      "codigo": "",
      "titulo": "Contexto de la organización (DOFA y partes interesadas)",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-RIESGOS-CALIDAD": {
      "codigo": "",
      "titulo": "Matriz de riesgos y oportunidades",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-OBJETIVOS-CALIDAD": {
      "codigo": "",
      "titulo": "Objetivos e indicadores de calidad",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PNC": {
      "codigo": "",
      "titulo": "Registro de producto o servicio no conforme",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PQRS": {
      "codigo": "",
      "titulo": "Informe de PQRS de clientes",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-SATISFACCION": {
      "codigo": "",
      "titulo": "Encuesta e informe de satisfacción del cliente",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-PREOPERACIONAL": {
      "codigo": "",
      "titulo": "Inspección preoperacional",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-CIERRE-MES": {
      "codigo": "",
      "titulo": "Informe mensual del SG-SST",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-EVIDENCIAS": {
      "codigo": "",
      "titulo": "Índice de evidencias del SG-SST por estándar",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    },
    "SG-ETIQUETAS-QR": {
      "codigo": "",
      "titulo": "Etiquetas QR de equipos e instalaciones",
      "version": "",
      "fecha": "",
      "actualizacion": ""
    }
  },
  "modulos": {
    "caliente": true,
    "alturas": true,
    "confinados": true,
    "izajes": true,
    "electrico": true,
    "ats": true,
    "asistencia": true,
    "personal": true,
    "epp": true,
    "brigadistas": true,
    "tablero": true,
    "reportes": true,
    "habilitacion": true,
    "plan": true,
    "inspecciones": true,
    "indicadores": true,
    "copasst": true,
    "convivencia": true,
    "comiteemergencias": true,
    "auditorias": true,
    "plananual": true,
    "peligros": true,
    "emergencias": true,
    "salud": true,
    "documental": true,
    "revision": true,
    "contratistas": true,
    "usuarios": true,
    "dotacion": true,
    "induccion": true,
    "programas": true,
    "pesv": true,
    "gerencia": true,
    "ambiental": true,
    "quimicos": true,
    "kit": true,
    "calidad": true,
    "asesor": true,
    "cierre": true,
    "evidencias": true,
    "preop": true,
    "proveedores": true
  },
  "correos": {
    "aprobacionEpp": "",
    "dominio": ""
  },
  "contactoEpp": {
    "nombre": "",
    "cargo": "",
    "whatsapp": ""
  },
  "habilitacion": {
    "requisitos": {
      "seguridad_social": {
        "nombre": "Pago de seguridad social (PILA)",
        "meses": 1
      },
      "induccion": {
        "nombre": "Inducción / reinducción en SST",
        "meses": 12
      },
      "medico": {
        "nombre": "Concepto médico ocupacional",
        "meses": 12,
        "apto": true
      },
      "alturas": {
        "nombre": "Curso de trabajo en alturas",
        "meses": 18
      },
      "confinados": {
        "nombre": "Curso de espacios confinados",
        "meses": 12
      },
      "izajes": {
        "nombre": "Certificación de izaje (rigger / operador)",
        "meses": 12
      },
      "electrico": {
        "nombre": "Competencia en riesgo eléctrico",
        "meses": 12
      },
      "caliente": {
        "nombre": "Capacitación en trabajo en caliente",
        "meses": 12
      }
    },
    "exigir": {
      "todos": [
        "seguridad_social",
        "induccion",
        "medico"
      ],
      "alturas": [
        "alturas"
      ],
      "confinados": [
        "confinados"
      ],
      "izajes": [
        "izajes"
      ],
      "electrico": [
        "electrico"
      ],
      "caliente": [
        "caliente"
      ]
    },
    "avisarDias": 15
  },
  "acceso": null,
  "centrosCosto": [],
  "servidor": "",
  "apiToken": "",
  "demo": false,
  "multiempresa": true,
  "producto": "Portal SSTA"
};



/* ════════════════════════════════════════════════════════════
   Motor: no hace falta tocar nada de aquí para abajo.
   ════════════════════════════════════════════════════════════ */

/* ── Varias empresas en un mismo sitio (multiempresa: true) ──
   Quien vende el portal publica UN sitio con su marca; cada empresa cliente
   tiene su archivo empresas/<código>.json (lo genera configurar-empresa.html)
   y entra con  https://…/?e=<código>.  El celular recuerda su empresa (y sus
   datos, para abrir sin señal); cambiar de empresa borra lo de la anterior en
   ese equipo. Así una sola actualización del sitio les llega a todos. */
const MultiEmpresa = (function () {
  const E = EMPRESA;
  if (!E.multiempresa || typeof window === 'undefined') return { activo: false };
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } return null; };
  const valido = (c) => /^[a-z0-9][a-z0-9-]{1,39}$/.test(String(c || ''));
  const proveedor = JSON.parse(JSON.stringify(E));
  let cod = ls('ssta-empresa') || '';
  let pedido = '';
  try { pedido = String(new URLSearchParams(location.search).get('e') || '').trim().toLowerCase(); } catch (e) {}
  if (pedido && (!valido(pedido) || pedido === cod)) pedido = pedido === cod ? '' : pedido;
  let datos = null; try { datos = JSON.parse(ls('ssta-empresa-datos') || 'null'); } catch (e) {}
  const cargada = !!(cod && datos && datos.codigo === cod && datos.empresa) && !pedido;
  if (cargada) {
    // Lo de la empresa reemplaza lo del sitio; la marca (producto) y el modo siguen siendo del proveedor.
    Object.keys(datos.empresa).forEach((k) => { if (k !== 'multiempresa' && k !== 'producto' && k !== 'demo') E[k] = datos.empresa[k]; });
    E.codigo = cod; delete E.sinEmpresa; delete E.sinConfigurar;
  } else E.sinEmpresa = true;
  const url = (c) => 'empresas/' + encodeURIComponent(c) + '.json';
  async function traer(c) {
    const r = await fetch(url(c), { cache: 'no-store' });
    if (r.status === 404) throw new Error('No hay ninguna empresa con el código «' + c + '».');
    if (!r.ok) throw new Error('No se pudo leer la empresa (' + r.status + ').');
    const j = await r.json();
    if (!j || !j.empresa || (j.codigo && j.codigo !== c)) throw new Error('El archivo de la empresa no es válido.');
    const emp = j.empresa;
    // Solo se aceptan logos de imagen y colores reales (el archivo viene del sitio, pero mejor no confiar a ciegas).
    if (emp.logo && !/^(data:image\/(png|jpeg|gif|webp|svg\+xml);base64,[A-Za-z0-9+/=]+|[\w./-]+\.(png|jpe?g|gif|webp|svg))$/i.test(String(emp.logo))) delete emp.logo;
    if (emp.colorMarca && !/^#[0-9a-f]{3,8}$/i.test(String(emp.colorMarca))) delete emp.colorMarca;
    return { codigo: c, empresa: emp, generado: j.generado || '' };
  }
  /** Lo que el portal guarda en el equipo (sesión, borradores de ATS y reportes, plantillas…), de la empresa anterior. */
  function borrarLocal() { try { Object.keys(localStorage).filter((k) => /^(ssta-|ats-)/.test(k)).forEach((k) => localStorage.removeItem(k)); } catch (e) {} }
  /** ¿Hay registros sin enviar en este celular? (no se cambia de empresa con cosas en la cola) */
  function pendientes() {
    return new Promise((ok) => {
      try {
        const req = indexedDB.open('ssta-outbox', 1);
        req.onupgradeneeded = () => req.result.createObjectStore('pending', { keyPath: 'id', autoIncrement: true });
        req.onsuccess = () => { try { const c = req.result.transaction('pending', 'readonly').objectStore('pending').count(); c.onsuccess = () => ok(c.result || 0); c.onerror = () => ok(0); } catch (e) { ok(0); } };
        req.onerror = () => ok(0);
      } catch (e) { ok(0); }
    });
  }
  /** Entra a la empresa c: si había otra, primero revisa la cola y borra lo de la anterior en este equipo. */
  async function entrar(c) {
    c = String(c || '').trim().toLowerCase();
    if (!valido(c)) throw new Error('El código tiene letras minúsculas, números y guiones (ej: acme-sas).');
    const d = await traer(c);
    if (cod && cod !== c) {
      const n = await pendientes();
      if (n) throw new Error('Este celular tiene ' + n + ' registro(s) de ' + ((datos && datos.empresa && datos.empresa.nombreCorto) || cod) + ' sin enviar. Envíalos (con señal) antes de cambiar de empresa.');
      borrarLocal(); try { sessionStorage.clear(); } catch (e) {}
    }
    ls('ssta-empresa', c); ls('ssta-empresa-datos', JSON.stringify(d));
    return d;
  }
  function salir() { borrarLocal(); }
  // Si en otra pestaña se cambió de empresa, esta se recarga para no mezclar datos.
  try { window.addEventListener('storage', (ev) => { if (ev.key === 'ssta-empresa' && (ev.newValue || '') !== cod) location.reload(); }); } catch (e) {}
  // Con señal, se refrescan los datos de la empresa (logo, formatos, módulos…) para la próxima vez.
  if (cargada && typeof fetch !== 'undefined') setTimeout(() => { traer(cod).then((d) => { const a = JSON.stringify(d.empresa); if (a !== JSON.stringify(datos.empresa) && ls('ssta-empresa') === cod) ls('ssta-empresa-datos', JSON.stringify(d)); }).catch(() => {}); }, 2500);
  // Sin empresa elegida, las páginas llevan al inicio (allí se escribe el código).
  const pagina = location.pathname.split('/').pop() || 'index.html';
  if (E.sinEmpresa && !/^(index\.html|estado\.html|configurar-empresa\.html|offline\.html|ayuda\.html)?$/.test(pagina)) {
    // Se recuerda a qué página iba (con su #registro) para volver allí después de elegir la empresa.
    const volver = pagina + (location.hash || '');
    location.replace('index.html?' + (pedido ? 'e=' + encodeURIComponent(pedido) + '&' : '') + 'volver=' + encodeURIComponent(volver));
  }
  return { activo: true, codigo: cod, pedido, cargada, proveedor, entrar, salir, pendientes, nombre: () => (datos && datos.empresa && (datos.empresa.nombreCorto || datos.empresa.nombre)) || '' };
})();

const Empresa = (function () {
  const E = EMPRESA;
  const PRODUCTO = String(E.producto || 'Portal SSTA');
  // Empresa sin logo propio: un distintivo con sus iniciales y su color.
  if (!E.logo) {
    const ini = String(E.nombreCorto || E.nombre || 'SST').replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9 ]/g, '').split(/\s+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 3).toUpperCase() || 'SST';
    const color = E.colorMarca || '#1f3b57';
    E.logo = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="240" height="140" viewBox="0 0 240 140"><rect width="240" height="140" rx="22" fill="' + color + '"/><text x="120" y="92" font-family="Arial,Helvetica,sans-serif" font-size="64" font-weight="700" text-anchor="middle" fill="#fff">' + ini + '</text></svg>');
  }
  const FABRICA = ['SSTA-F-005', 'SSTA-F-006', 'SSTA-F-007', 'SSTA-F-116', 'SSTA-F-117', 'SSTA-F-118', 'SSTA-F-119', 'SSTA-F-147', 'SSTA-F-149', 'SSTA-F-180'];
  const MODULO_DE = {
    'permiso-trabajo-caliente.html': 'caliente', 'permiso-trabajo-alturas.html': 'alturas', 'permiso-espacios-confinados.html': 'confinados',
    'permiso-izajes-cargas.html': 'izajes', 'permiso-trabajo-electrico.html': 'electrico', 'ats.html': 'ats', 'asistencia.html': 'asistencia',
    'personal-autorizado.html': 'personal', 'inspeccion-epp.html': 'epp', 'dashboard.html': 'tablero',
    'reportes.html': 'reportes', 'habilitacion.html': 'habilitacion', 'plan-accion.html': 'plan', 'inspecciones.html': 'inspecciones', 'indicadores.html': 'indicadores',
    'copasst.html': 'copasst', 'convivencia.html': 'convivencia', 'comite-emergencias.html': 'comiteemergencias', 'auditorias.html': 'auditorias',
    'plan-anual.html': 'plananual', 'peligros.html': 'peligros', 'emergencias.html': 'emergencias', 'salud.html': 'salud', 'documental.html': 'documental', 'revision-direccion.html': 'revision',
    'contratistas.html': 'contratistas', 'usuarios.html': 'usuarios', 'entrega-epp.html': 'dotacion', 'induccion.html': 'induccion', 'programas.html': 'programas', 'pesv.html': 'pesv', 'gerencia.html': 'gerencia', 'informe.html': 'gerencia', 'ambiental.html': 'ambiental', 'quimicos.html': 'quimicos', 'documentos.html': 'kit', 'calidad.html': 'calidad', 'asesor.html': 'asesor', 'cierre-mes.html': 'cierre', 'evidencias.html': 'evidencias', 'preoperacional.html': 'preop', 'proveedores.html': 'proveedores'
  };

  function formato(id) {
    return Object.assign({ codigo: id, version: '', fecha: '', actualizacion: '' }, (E.formatos && E.formatos[id]) || {});
  }
  function codigo(id) { return formato(id).codigo || id; }
  function moduloActivo(k) { return !E.modulos || E.modulos[k] !== false; }
  /* ── Quién ve qué (v111) ──
     PUBLICO: solo los preoperacionales y los reportes (evento, PQRS y «¿qué peligros ves?»):
     cualquiera, sin usuario ni contraseña.
     Todo lo demás es el «Sistema de gestión» y pide entrar con usuario y contraseña:
     también los permisos de trabajo, el ATS, las charlas, el personal autorizado y la
     inspección de EPP (antes eran públicos). Administrador y SST ven todo; el supervisor
     de campo siempre tiene lo de la obra (CAMPO) además de lo de su tabla. */
  const PUBLICO = ['reportes', 'preop'];
  const CAMPO = ['caliente', 'alturas', 'confinados', 'izajes', 'electrico', 'ats', 'asistencia', 'personal', 'epp', 'brigadistas', 'tablero'];
  const ACCESO_FABRICA = {
    supervisor: ['habilitacion', 'inspecciones', 'plan', 'contratistas', 'dotacion', 'induccion', 'emergencias', 'comiteemergencias', 'pesv', 'programas', 'quimicos', 'peligros'],
    comite: ['copasst', 'convivencia', 'comiteemergencias', 'inspecciones', 'plan', 'indicadores', 'peligros', 'auditorias', 'plananual', 'habilitacion', 'tablero'],
    consulta: ['gerencia', 'indicadores', 'plan', 'plananual', 'cierre', 'evidencias', 'auditorias', 'revision', 'documental', 'kit', 'peligros', 'habilitacion', 'calidad', 'ambiental', 'copasst', 'proveedores', 'tablero']
  };
  const esPublico = (m) => !m || m === 'externo' || PUBLICO.indexOf(m) !== -1;
  function accesoRol(m, rol) {
    if (esPublico(m) || rol === 'admin' || rol === 'sst') return true;
    if (rol === 'supervisor' && CAMPO.indexOf(m) !== -1) return true;
    const t = Object.assign({}, ACCESO_FABRICA, E.acceso || {});
    return Array.isArray(t[rol]) && t[rol].indexOf(m) !== -1;
  }
  /** Tabla en uso (fábrica + lo que la empresa cambió en EMPRESA.acceso), para mostrarla. */
  function tablaAcceso() { return Object.assign({}, ACCESO_FABRICA, E.acceso || {}); }
  /** Rol de quien está en este equipo (solo si el servidor usa usuarios y hay sesión). */
  function rolActual() {
    try { return typeof Sesion !== 'undefined' && Sesion.modo() && Sesion.yo() ? Sesion.rol() : null; } catch (e) { return null; }
  }
  function moduloDeHref(href) {
    const h = String(href || '');
    if (/^https?:/i.test(h)) return 'externo';
    const archivo = h.split(/[?#]/)[0].split('/').pop();
    if (archivo === 'inspeccion-epp.html' && /tipo=brigadista/.test(h)) return 'brigadistas';
    return MODULO_DE[archivo] || null;
  }

  /* ── Reemplazo de textos: nombre del producto y códigos propios de los formatos ── */
  const reemplazos = [];
  if (PRODUCTO !== 'Portal SSTA') reemplazos.push([/Portal SSTA/g, PRODUCTO]);
  FABRICA.forEach((id) => { const c = codigo(id); if (c !== id) reemplazos.push([new RegExp(id.replace(/-/g, '\\-') + '(?!\\d)', 'g'), c]); });
  function cambiarTexto(s) {
    let r = s;
    for (let i = 0; i < reemplazos.length; i++) r = r.replace(reemplazos[i][0], reemplazos[i][1]);
    return r;
  }
  const ATRIBUTOS = ['aria-label', 'placeholder', 'title', 'alt', 'data-search'];
  function metaFormato(el) {
    // Encabezado de los permisos: "Código: <b>SSTA-F-117</b> · Versión: <b>2</b><br>Fecha doc…"
    if (el.dataset.empresaMeta) return;
    const m = /SSTA-F-\d+/.exec(el.textContent || '');
    if (!m || FABRICA.indexOf(m[0]) === -1) return;
    const f = formato(m[0]);
    el.dataset.empresaMeta = '1';
    const largo = el.dataset.meta === 'largo' || /Versión|Fecha/.test(el.textContent);
    el.innerHTML = 'Código: <b>' + esc(f.codigo) + '</b>' + (f.version ? (largo ? ' · Versión: <b>' + esc(f.version) + '</b>' : ' · V' + esc(f.version)) : '') +
      (largo && (f.fecha || f.actualizacion) ? '<br>' + [f.fecha ? 'Fecha doc: ' + esc(f.fecha) : '', f.actualizacion ? 'Act.: ' + esc(f.actualizacion) : ''].filter(Boolean).join(' · ') : '');
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
  function aplicar(raiz) {
    if (!raiz) return;
    if (raiz.nodeType === 1) {
      raiz.querySelectorAll && raiz.querySelectorAll('.hdr .meta').forEach(metaFormato);
      if (raiz.matches && raiz.matches('.hdr .meta')) metaFormato(raiz);
    }
    if (raiz.nodeType === 1 && raiz.closest && raiz.closest('[data-empresa-no-tocar]')) return;
    if (raiz.nodeType === 3 && raiz.parentElement && raiz.parentElement.closest('[data-empresa-no-tocar]')) return;
    // [data-empresa-no-tocar]: zonas que muestran los textos de fábrica a propósito (configurador).
    const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      { acceptNode: (x) => (x.nodeType === 1 && x.hasAttribute('data-empresa-no-tocar')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    let n = raiz.nodeType === 3 ? raiz : w.currentNode;
    while (n) {
      if (n.nodeType === 3) {
        const p = n.parentNode && n.parentNode.nodeName;
        if (p !== 'SCRIPT' && p !== 'STYLE') { const t = cambiarTexto(n.data); if (t !== n.data) n.data = t; }
      } else if (n.nodeType === 1) {
        for (let i = 0; i < ATRIBUTOS.length; i++) {
          const v = n.getAttribute(ATRIBUTOS[i]);
          if (v) { const t = cambiarTexto(v); if (t !== v) n.setAttribute(ATRIBUTOS[i], t); }
        }
        if (n.nodeName === 'IMG') { const s = n.getAttribute('src') || ''; if (/logo-empresa\.svg$/.test(s)) n.setAttribute('src', E.logo); }
      }
      if (raiz.nodeType === 3) break;
      n = w.nextNode();
    }
  }

  /* ── Inicio: módulos apagados y enlaces de otra empresa ── */
  function filtrarInicio() {
    if (!document.querySelector('.accordion')) return;
    document.querySelectorAll('a.card[href]').forEach((a) => {
      const m = moduloDeHref(a.getAttribute('href'));
      const fuera = m && m !== 'externo' && !moduloActivo(m);
      // Con usuario: lo que su rol no ve tampoco sale en el inicio.
      const rol = rolActual();
      if (fuera || (rol && !accesoRol(m, rol))) a.classList.add('oculto-empresa');
    });
    document.querySelectorAll('details.sub-item').forEach((d) => {
      const vis = d.querySelectorAll('a.card:not(.oculto-empresa)').length;
      const c = d.querySelector('.sub-count'); if (c) c.textContent = vis;
      if (!vis) d.classList.add('oculto-empresa');
    });
    document.querySelectorAll('details.accordion-item').forEach((d) => {
      if (!d.querySelector('a.card:not(.oculto-empresa)')) d.classList.add('oculto-empresa');
    });
  }

  function estilos() {
    const st = document.createElement('style');
    st.id = 'estiloEmpresa';
    let css = '.oculto-empresa{display:none !important;}';
    const url = 'url("' + String(E.logo).replace(/"/g, '%22') + '")';
    css += '.marca{background-image:' + url + ' !important;}body .hdr-logo{background-image:' + url + ' !important;}';
    if (E.colorMarca) css += ':root{--brand-index:' + E.colorMarca + ';}';
    st.textContent = css;
    (document.head || document.documentElement).appendChild(st);
  }

  function iniciar() {
    estilos();
    if (reemplazos.length) {
      document.title = cambiarTexto(document.title);
      aplicar(document.body);
      // Lo que se pinta después (listas, modales, la hoja del PDF) también.
      new MutationObserver((muts) => {
        muts.forEach((m) => m.addedNodes.forEach((nd) => { if (nd.nodeType === 1 || nd.nodeType === 3) aplicar(nd); }));
      }).observe(document.body, { childList: true, subtree: true });
      window.addEventListener('beforeprint', () => aplicar(document.body));
    }
    filtrarInicio();
    const cab = document.querySelector('[data-empresa="cabecera"]');
    if (cab) cab.textContent = (E.nombre || E.nombreCorto) + (E.nit ? ' · NIT ' + E.nit : '') + (E.subtitulo ? ' — ' + E.subtitulo : '');
    document.querySelectorAll('[data-empresa="nombre"]').forEach((el) => { el.textContent = E.nombre || E.nombreCorto || ''; });
    document.querySelectorAll('[data-empresa="marca"]').forEach((el) => { el.textContent = (E.nombreCorto || E.nombre || '') + ' · ' + PRODUCTO; });
    document.querySelectorAll('.marca[role="img"], .hdr-logo[role="img"]').forEach((el) => el.setAttribute('aria-label', 'Logo de ' + (E.nombreCorto || E.nombre || 'la empresa')));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else if (document.body) iniciar();

  return {
    formato, codigo, moduloActivo, aplicar, moduloDeHref, esPublico, accesoRol, rolActual, tablaAcceso,
    logo: () => E.logo,
    producto: PRODUCTO,
    pie: () => PRODUCTO + ' · ' + (E.nombreCorto || E.nombre)
  };
})();

/* Empresa demo: carga el servidor simulado ANTES que el resto del portal. */
if (EMPRESA.demo && typeof document !== 'undefined' && document.readyState === 'loading') {
  document.write('<script src="demo/demo.js"><\/script>');
}
