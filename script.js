const ramos = [
  { nombre: "Taller de Introducción al Proyectonde Diseño", id: "taller_intro", requisitos: [], abre: ["taller_ideacion"] },
  { nombre: "Técnicas de Representación", id: "tecnicas_repr", requisitos: [], abre: ["percepcion"] },
  { nombre: "Introducción a la Investigación en Diseño", id: "intro_investigacion", requisitos: [], abre: ["investigacion_diseno"] },
  { nombre: "Historias del Diseño y sus contextos Históricos", id: "historias" },
  { nombre: "Taller de Ideación y Formalización para el Diseño", id: "taller_ideacion", requisitos: ["taller_intro"], abre: ["taller_problematizacion"] },
  { nombre: "Percepción y Composición", id: "percepcion", requisitos: ["tecnicas_repr"] },
  { nombre: "Diseño, Tecnología y Sociedad", id: "dts" },
  { nombre: "Filosofía", id: "filosofia" },
  { nombre: "Taller de Problematización y Conceptualización para el Diseño", id: "taller_problematizacion", requisitos: ["taller_ideacion"], abre: ["taller_integral"] },
  { nombre: "Laboratorio de Experimentación y Prototipado", id: "lab" },
  { nombre: "Investigación para el Diseño", id: "investigacion_diseno", requisitos: ["intro_investigacion"], abre: ["investigacion_avanzada"] },
  { nombre: "Taller de Diseño Integral", id: "taller_integral", requisitos: ["taller_problematizacion"], abre: ["taller_estrategico"] },
  { nombre: "Materiales y Procesos", id: "materiales" },
  { nombre: "Teoría y Crítica Contemporánea de la Cultura del Diseño", id: "teoria" },
  { nombre: "Taller de Diseño Estratégico", id: "taller_estrategico", requisitos: ["taller_integral"], abre: ["taller_innovacion"] },
  { nombre: "Formulación de Proyectos de Diseño", id: "formulacion" },
  { nombre: "Investigación a través del Diseño", id: "investigacion_avanzada", requisitos: ["investigacion_diseno"] },
  { nombre: "Taller de Diseño para la Innovación", id: "taller_innovacion", requisitos: ["taller_estrategico"], abre: ["taller_futuros"] },
  { nombre: "Diseño Crítico", id: "critico" },
  { nombre: "Pensamiento Computacional", id: "computacional" },
  { nombre: "Taller de Diseño para Escenarios Futuros", id: "taller_futuros", requisitos: ["taller_innovacion"], abre: ["taller_integracion"] },
  { nombre: "Diseño de Intangibles y Sistemas", id: "intangibles" },
  { nombre: "Diseño para el Desarrollo Sostenible", id: "sostenible" },
  { nombre: "Taller de Integración Interdisciplinar", id: "taller_integracion", requisitos: ["taller_futuros"], abre: ["seminario"] },
  { nombre: "Ética del Diseño", id: "etica", abre: ["practica_oficina"] },
  { nombre: "Seminario de Título", id: "seminario", requisitos: ["taller_integracion"], abre: ["proyecto"] },
  { nombre: "Práctica Profesional de Oficina", id: "practica_oficina", requisitos: ["etica"], abre: ["practica_servicio"] },
  { nombre: "Proyecto de Título", id: "proyecto", requisitos: ["seminario"] },
  { nombre: "Práctica Profesional de Servicio", id: "practica_servicio", requisitos: ["practica_oficina"] },
];

const malla = document.getElementById("malla");
const estado = {};

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.id = ramo.id;
  div.innerHTML = `${ramo.nombre}<div class="estado"></div>`;

  if (!ramo.requisitos || ramo.requisitos.length === 0) {
    div.classList.add("activo");
  }

  div.addEventListener("click", () => {
    if (!div.classList.contains("activo") || div.classList.contains("aprobado")) return;
    div.classList.add("aprobado");
    estado[ramo.id] = true;
    activarRamos();
  });

  malla.appendChild(div);
}

function activarRamos() {
  ramos.forEach(r => {
    if (estado[r.id]) return;
    const cumple = (r.requisitos || []).every(req => estado[req]);
    if (cumple) {
      const div = document.getElementById(r.id);
      if (div) div.classList.add("activo");
    }
  });
}

ramos.forEach(crearRamo);
activarRamos();


