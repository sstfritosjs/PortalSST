# Historial de versiones — Portal SSTA

Lo más nuevo arriba. Al sacar una versión: `node herramientas/subir-version.js`,
anotarla aquí y `node herramientas/empaquetar.js`.

## v112 — El servidor también pide usuario, barra inferior y tablero con tickets

**Actualiza el sitio Y los servidores** (`node herramientas/actualizar-servidores.js clientes.json`).
Sin el servidor nuevo, la contraseña de la obra solo la pide la pantalla (como en v111).

Seguridad
  · Con usuarios activos, el servidor rechaza sin sesión las consultas y registros de
    los 5 permisos, el ATS, las charlas, la inspección de EPP y el personal autorizado
    (antes bastaba la clave del portal, que está en el sitio). Lo hace el enrutador del
    servidor único (00-Portal.gs) con la sesión que firma el SG-SST.
  · El sitio manda la sesión de quien entró en todas esas consultas y envíos, también lo
    que estaba en la cola sin señal; si la sesión venció, el registro se conserva y pide
    entrar (no se pierde).
  · Sin usuarios activos, o sin el SG-SST instalado, todo sigue como antes.
  · 🩺 Estado: «Funciona · pide usuario» para esos servidores cuando no has entrado.

Diseño
  · Barra inferior flotante (Inicio · Permisos · Gestión · Ayuda) para quien entró con su
    usuario. Se esconde sola en pantallas con su propia barra de guardar y al imprimir.
  · Tablero de permisos y ATS: cifras arriba (abiertos, vencidos, cerrados) y cada uno
    como ticket con su señal ISO, el código en letra técnica, el estado y una barra con
    la vigencia usada.
  · Señales ISO 7010 (círculo azul, cuadrado verde, triángulo amarillo) en lugar de
    emojis en los 5 permisos, el ATS, la inspección de EPP y 🩺 Estado.
  · Letra técnica (IBM Plex Mono, OFL) para los códigos.

Pruebas: 1364 de código y 109 en navegador (nuevas: el servidor rechaza la obra sin
sesión y la entrega con sesión, sesión falsa, barra inferior, tickets y señales).

## v111 — Diseño moderno y contraseña solo para el sistema de gestión

**Actualiza el sitio y luego los servidores** (`node herramientas/actualizar-servidores.js clientes.json`).
El código de los servidores no cambió (solo su número de versión): con los de v110 todo
funciona, pero el Panel del asesor los marcaría «desactualizado» hasta que corras el comando.

Acceso (pedido: «solo pedir la contraseña a quien entra al sistema de gestión»)
  · Sin usuario ni contraseña solo quedan el **preoperacional** y los **reportes**
    (evento, PQRS y «¿Qué peligros ves?»). La inducción por enlace o QR y la encuesta
    a clientes siguen abriéndose con su enlace.
  · Todo lo demás pasó al sistema de gestión y pide entrar: también los permisos de
    trabajo, el ATS, las charlas, la inspección de EPP, el personal autorizado y el
    tablero de permisos (hasta v110 eran públicos).
  · El Supervisor siempre tiene lo de la obra; Comité y Solo consulta ven el tablero
    de permisos pero no abren permisos. Administrador y SST, todo.
  · Un enlace directo a un permiso (o el QR) en un celular nuevo también pide entrar:
    la página pregunta al servidor si hay usuarios.
  · Funciona cuando la empresa tiene los usuarios activos. Sin usuarios, el sistema
    de gestión se abre con «Abrir el sistema de gestión», como antes.

Diseño
  · Inicio nuevo: tarjeta de bienvenida con la empresa, accesos grandes a
    Preoperacional y Reportar, y el sistema de gestión abajo (En obra + ciclo del mes).
  · Todas las pantallas: fondo con degradado suave, encabezados con degradado de marca,
    tarjetas de vidrio, botones en píldora, colores alegres y la letra Manrope
    (licencia OFL en fonts/). Los PDF e impresiones no cambian.
  · Ventana de entrar y aviso «Entra con tu usuario» con el diseño nuevo.

Pruebas: 1349 de código y 102 en navegador (nuevas: quién entra a qué, sin usuario y
con cada rol).

## v110 — Nada de lo diligenciado se pierde, pruebas en navegador y orden del proyecto

**Hay que actualizar sitio Y servidores** (`node herramientas/actualizar-servidores.js clientes.json`).
El sitio nuevo funciona con servidores viejos (sigue como antes), pero la clave
fuera de la dirección y el control de correos solo se activan con el servidor nuevo.

Corregido (se perdían datos o confundían)
  · Permiso de ALTURAS: no se guardaban fecha y hora de inicio y culminación, área,
    descripción de la actividad, nombre/cédula/FIRMA del inspector del sistema de
    acceso, altura aproximada, «¿por qué?» de la planeación, «Otro, ¿cuál?», EPP
    adicional (7.1) ni otros riesgos (9.9). La pantalla los exigía y salían en el PDF
    del momento, pero no quedaban en el registro: al cerrarlo desde otro celular no
    se veían, y sin fecha de culminación no salía la alerta de «vencido sin cerrar».
    Ahora van con los mismos nombres que los otros 4 permisos. Los permisos de
    alturas ya guardados no se pueden recuperar (esos datos nunca llegaron).
  · Sin señal, el permiso quedaba en cola pero la pantalla decía «No se pudo conectar…
    intente de nuevo»: ahora dice que quedó guardado en el equipo y se enviará solo.
  · Guardar varias veces sin señal dejaba copias del mismo permiso en la cola: ahora
    queda una sola (la más reciente).
  · Inducción desde el inicio: un error de JavaScript al marcar casillas del último paso.

Nuevo
  · Autorización de datos personales y de salud (Ley 1581) en las dos inducciones:
    la general es obligatoria y la de salud voluntaria. Se guarda con la inducción,
    sale en la constancia PDF y pasa a Personal habilitado; Salud avisa al registrar
    un examen de alguien sin esa autorización. Texto en autorizacion-datos.js.
  · La clave del portal y la sesión ya no viajan en la dirección de las consultas
    (van por POST). Solo con el servidor actualizado; con uno viejo sigue el GET.
  · Correos: el servidor revisa el cupo diario de Google antes de enviar, guarda los
    últimos para lo urgente (accidente) y no corta el aviso diario a mitad. 🩺 Estado
    muestra cuántos quedan y lo que no se envió.
  · pruebas/navegador.js: 97 pruebas en Chromium con tamaño de celular sobre la demo
    (sitio + servidor juntos): las 50 pantallas, los 5 permisos de punta a punta,
    que TODO lo escrito llegue y se vea en otro equipo, sin señal, firmas a pantalla
    completa y su tamaño, inducción con autorización, clave fuera de la dirección.
  · .github/workflows/pruebas.yml: GitHub corre las dos pruebas en cada subida y NO
    publica si algo sale en rojo (Settings → Pages → «GitHub Actions»).

Orden
  · Pruebas del código: de 84 fallas (y 13 grupos que ni corrían) a todas correctas
    (1339). La causa de 74 era una sola: config.js decía 'sin-servidor' en lugar del
    marcador 'PON-AQUI-EL-TOKEN'. Otras 10 leían empresa.js como texto compacto; ahora
    revisan los valores, así que vale también el formato JSON del configurador.
  · Una sola fuente: el paquete ya no trae tres copias de los .gs ni de la guía.
  · herramientas/empaquetar.js (pruebas + navegador si hay Playwright + servidor + demo
    + LEEME) y herramientas/subir-version.js (la versión en los 6 lugares a la vez).
  · 134 estilos escritos en línea en el HTML pasan a 18 clases de common.css,
    verificado con capturas píxel a píxel de todas las pantallas.
  · Medido el peso en celular: abrir un permiso descarga ~121 KB comprimidos y la
    instalación sin señal ~1,1 MB; el JavaScript tarda 40–130 ms con CPU lenta. No
    se parten los archivos: el beneficio sería mínimo y el riesgo alto.
  · El historial de versiones pasa del LEEME a este archivo.

## v109 — Inicio por categorías, agenda, proveedores por etapas y más ayudas

El servidor cambió (ingreso de proveedores por etapas; PQRS e inducción sin usuario): hay que actualizar los servidores de todas las empresas.

  · Inicio: «En la obra» por categorías; el sistema de gestión pide entrar y al entrar muestra
    «Tu agenda»: calendario de pendientes y cronograma del mes.
  · Inducción para responder desde el inicio (sin usuario): datos, temas, evaluación y firma.
    El resto de la inducción sigue en el sistema de gestión.
  · PQRS desde el inicio y dentro de Reportes (también en Calidad).
  · Proveedores por etapas: necesidad → 2 o 3 cotizaciones (se puede dejar «En cotización») →
    cuadro comparativo y elección → datos → documentos → evaluación inicial → alta en la matriz.
    El NIT se escribe solo con números: el guion y el dígito de verificación se ponen solos.
  · Matriz de EPP: sugiere los elementos según el cargo y sus peligros, y completa norma y
    vida útil mientras se escribe.
  · Investigación: los 5 porqués se agregan uno a uno con sugerencias según el caso, ayuda y
    alertas.
  · Programas de alto riesgo sincronizados con el personal autorizado y el inventario de equipos.
  · Cifras clicables: tocar «3 vencidos» lleva a la lista de eso que falta.
  · Celular: los pendientes del permiso ya no tapan las casillas al subir y bajar.

## v108 — Producto neutro, sin datos de ninguna empresa

  · Sin datos de ninguna empresa en el código: el sitio de fábrica trae datos de ejemplo
    («Tu empresa»), sin logo, correos, teléfonos, servidores, tokens ni enlaces de nadie.
  · Íconos de la app y logo de reserva propios del producto (escudo con chulo).
  · El inicio ya no tiene enlaces a formularios o carpetas externas.
  · Una prueba automática falla si vuelve a aparecer un correo, celular, token, enlace o
    nombre de una empresa real en el código.
  · OJO: no subas esta versión al repositorio de un sitio que ya esté en uso con su propia
    configuración en el código: ese sitio debe pasar primero a su empresas/<código>.json.

## v107 — Más fácil de llenar, con validaciones, y módulos nuevos (proveedores, encuestas, informe)
En todo el portal
  · Validación: cédula solo números, NIT con dígito de verificación, correo y teléfono válidos,
    cantidades no negativas, fechas coherentes (no futuras donde no aplica; fin ≥ inicio).
    Al guardar dice exactamente QUÉ falta y resalta el campo.
  · Toda lista con «Otro» abre un cuadro para escribir, y se guarda lo escrito.
  · Botones de acción (agregar, PDF, exportar) arriba de cada lista; botón flotante para subir.
  · PDF centrados y sin cortes en los márgenes. Ajustes de celular en todos los módulos.
  · Al elegir nombres, la lista aparece al tocar el campo y filtra al escribir.

Planear
  · Plan anual: cada actividad muestra su fase (Planear, Hacer, Verificar, Actuar); «Marcar
    como realizada»; en capacitaciones, personas esperadas, asistentes y cobertura.
  · Autoevaluación: con el número de trabajadores y el riesgo, solo deja los 7, 21 o 60
    estándares que le corresponden (los demás bloqueados), no permite «No aplica» donde sí
    aplica y dice cuáles faltan por contestar.
  · Personal habilitado: «Escribir en una tabla» (cuadros, pegar desde Excel, revisa cada celda).
  · Inspecciones: etiquetas QR de todos los equipos, por tipo o elegidos uno a uno, 3 tamaños.
  · Contratistas: Aplica / No aplica centrados en el celular, NIT y vencimientos validados.
  · NUEVO Proveedores y contratistas: matriz de requisitos por categoría (con excluyentes ★),
    evaluación inicial (bienes / servicios), reevaluación, homologación, cronograma, PDF y CSV.

Ejecutar
  · Exámenes médicos según la Res. 1843 de 2025: sugiere exámenes por cargo y exposición,
    periodicidad e ingreso a PVE; en cada PVE aparece quién está.
  · Entrega de EPP: matriz por cargo con elemento, norma y vida útil.
  · Inducción y reinducción con validación y la inducción anterior de la persona.
  · Programas de alto riesgo: botones arreglados y más programas.
  · Sustancias químicas: generador de etiquetas SGA para imprimir y lugares de almacenamiento.
  · Emergencias: amenazas con «Otra», dotación de la brigada como inventario, hoja de vida
    de cada brigadista (PDF) y participantes de los simulacros.
  · PESV según la Res. 40595 de 2022: nivel por misionalidad, pasos que aplican y 13 indicadores.
  · Ambiental: aspectos e impactos seleccionables; categoría de generador de RESPEL con la
    media de 6 meses y el reporte en el RUA; conclusiones automáticas de los consumos.
  · Calidad: encuestas de satisfacción por enlace (WhatsApp, correo o QR); el cliente responde
    sin usuario y el resultado entra al indicador.

Comités
  · NUEVO Comité de emergencias (conformación, actas trimestrales, compromisos, PDF).
  · El informe del Comité de Convivencia sale con firmas de todos.

Medir y mejorar
  · Investigación de accidentes: causas con «Otra», 5 porqués, causa raíz, medidas por causa
    y avance de la investigación.
  · Revisión por la dirección con los 24 puntos del Dec. 1072 (art. 2.2.4.6.31) y rendición
    de cuentas de responsable del SG-SST, comités, brigada y gerencia, con firmas.
  · Matriz de peligros con sugerencias de controles y encuesta para que los trabajadores
    identifiquen sus peligros (QR por área).
  · Matriz legal: «Novedades normativas» consulta fuentes en línea y propone normas nuevas.
  · Listado maestro: código automático de documentos. Gestión del cambio a PDF.
  · NUEVO Informe del SG-SST: gráficas y sugerencias de mejora por periodo, con PDF firmado.
  · Asesor: «Asignar tarea» a cada empresa; le llega al SST en sus pendientes y en el correo
    del lunes; el asesor ve abiertas, vencidas y cerradas.
