const ramos = [
  { nombre: "Taller de Introducción al Proyecto de Diseño", id: "taller_intro", requisitos: [], nivel: 1 },
  { nombre: "Técnicas de Representación", id: "tecnicas_repr", requisitos: [], nivel: 1 },
  { nombre: "Introducción a la Investigación en Diseño", id: "intro_inv_diseno", requisitos: [], nivel: 1 },
  { nombre: "Historias del Diseño y sus contextos Históricos", id: "historias", requisitos: [], nivel: 1 },

  { nombre: "Taller de Ideación y Formalización para el Diseño", id: "taller_ideacion", requisitos: ["taller_intro"], nivel: 2 },
  { nombre: "Percepción y Composición", id: "percepcion", requisitos: ["tecnicas_repr"], nivel: 2 },
  { nombre: "Diseño, Tecnología y Sociedad", id: "dts", requisitos: [], nivel: 2 },
  { nombre: "Filosofía", id: "filosofia", requisitos: [], nivel: 2 },

  { nombre: "Taller de Problematización y Conceptualización para el Diseño", id: "taller_problemas", requisitos: ["taller_ideacion"], nivel: 3 },
  { nombre: "Laboratorio de Experimentación y Prototipado", id: "lab", requisitos: [], nivel: 3 },
  { nombre: "Investigación para el Diseño", id: "investigacion_diseno", requisitos: ["intro_inv_diseno"], nivel: 3 },

  { nombre: "Taller de Diseño Integral", id: "taller_integral", requisitos: ["taller_problemas"], nivel: 4 },
  { nombre: "Materiales y Procesos", id: "materiales", requisitos: [], nivel: 4 },
  { nombre: "Teoría y Crítica Contemporánea de la Cultura del Diseño", id: "teoria", requisitos: [], nivel: 4 },

  { nombre: "Taller de Diseño Estratégico", id: "taller_estrategico", requisitos: ["taller_integral"], nivel: 5 },
  { nombre: "Formulación de Proyectos de Diseño", id: "formulacion", requisitos: [], nivel: 5 },
  { nombre: "Investigación a través del Diseño", id: "inv_avanzada", requisitos: ["investigacion_diseno"], nivel: 5 },

  { nombre: "Taller de Diseño para la Innovación", id: "taller_innovacion", requisitos: ["taller_estrategico"], nivel: 6 },
  { nombre: "Diseño Crítico", id: "critico", requisitos: [], nivel: 6 },
  { nombre: "Pensamiento Computacional", id: "computacional", requisitos: [], nivel: 6 },

  { nombre: "Taller de Diseño para Escenarios Futuros", id: "taller_futuros", requisitos: ["taller_innovacion"], nivel: 7 },
  { nombre: "Diseño de Intangibles y Sistemas", id: "intangibles", requisitos: [], nivel: 7 },
  { nombre: "Diseño para el Desarrollo Sostenible", id: "sostenible", requisitos: [], nivel: 7 },

  { nombre: "Taller de Integración Interdisciplinar", id: "taller_integracion", requisitos: ["taller_futuros"], nivel: 8 },
  { nombre: "Ética del Diseño", id: "etica", requisitos: [], nivel: 8 },

  { nombre: "Seminario de Título", id: "seminario", requisitos: ["taller_integracion"], nivel: 9 },
  { nombre: "Práctica Profesional de Oficina", id: "practica_oficina", requisitos: ["etica"], nivel: 9 },

  { nombre: "Proyecto de Título", id: "proyecto", requisitos: ["seminario"], nivel: 10 },
  { nombre: "Práctica Profesional de Servicio", id: "practica_servicio", requisitos: ["practica_oficina"], nivel: 10 },
];

const malla = document.getElementById("malla");
const estado = {};
const niveles = [...new Set(ramos.map(r => r.nivel))];

const nombresSemestres = {
  1: "Semestre I",
  2: "Semestre II",
  3: "Semestre III",
  4: "Semestre IV",
  5: "Semestre V",
  6: "Semestre VI",
  7: "Semestre VII",
  8: "Semestre VIII",
  9: "Semestre IX",
  10: "Semestre X",
};

niveles.forEach(nivel => {
  const contenedor = document.createElement("div");
  contenedor.classList.add("nivel");
  contenedor.innerHTML = `<h2>${nombresSemestres[nivel]}</h2><div class="fila" id="nivel-${nivel}"></div>`;
  malla.appendChild(contenedor);
});

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.id = ramo.id;
  div.innerText = ramo.nombre;

  if (!ramo.requisitos || ramo.requisitos.length === 0) {
    div.classList.add("activo");
  }

  div.addEventListener("click", () => {
    if (!div.classList.contains("activo") || div.classList.contains("aprobado")) return;
    div.classList.add("aprobado");
    estado[ramo.id] = true;
    activarRamos();
  });

  document.getElementById(`nivel-${ramo.nivel}`).appendChild(div);
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
