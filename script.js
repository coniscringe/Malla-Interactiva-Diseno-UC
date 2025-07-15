const ramos = [
  { id: "introDiseno", nombre: "Taller de Introducción al Proyecto de Diseño", desbloquea: ["ideacion"] },
  { id: "representacion", nombre: "Técnicas de Representación", desbloquea: ["percepcion"] },
  { id: "investigacionIntro", nombre: "Introducción a la Investigación en Diseño", desbloquea: ["investigacionDiseno"] },
  { id: "historias", nombre: "Historias del Diseño y sus contextos Históricos", desbloquea: [] },

  { id: "ideacion", nombre: "Taller de Ideación y Formalización para el Diseño", desbloquea: ["problematizacion"] },
  { id: "percepcion", nombre: "Percepción y Composición", desbloquea: [] },
  { id: "tecnologia", nombre: "Diseño, Tecnología y Sociedad", desbloquea: [] },
  { id: "filosofia", nombre: "Filosofía", desbloquea: [] },

  { id: "problematizacion", nombre: "Taller de Problematización y Conceptualización para el Diseño", desbloquea: ["integral"] },
  { id: "laboratorio", nombre: "Laboratorio de Experimentación y Prototipado", desbloquea: [] },
  { id: "investigacionDiseno", nombre: "Investigación para el Diseño", desbloquea: ["investigacionATraves"] },

  { id: "integral", nombre: "Taller de Diseño Integral", desbloquea: ["estrategico"] },
  { id: "materiales", nombre: "Materiales y Procesos", desbloquea: [] },
  { id: "teoriaCritica", nombre: "Teoría y Crítica Contemporánea de la Cultura del Diseño", desbloquea: [] },

  { id: "estrategico", nombre: "Taller de Diseño Estratégico", desbloquea: ["innovacion"] },
  { id: "formulacion", nombre: "Formulación de Proyectos de Diseño", desbloquea: [] },
  { id: "investigacionATraves", nombre: "Investigación a través del Diseño", desbloquea: [] },

  { id: "innovacion", nombre: "Taller de Diseño para la Innovación", desbloquea: ["futuros"] },
  { id: "critico", nombre: "Diseño Crítico", desbloquea: [] },
  { id: "computacional", nombre: "Pensamiento Computacional", desbloquea: [] },

  { id: "futuros", nombre: "Taller de Diseño para Escenarios Futuros", desbloquea: ["interdisciplinar"] },
  { id: "intangibles", nombre: "Diseño de Intangibles y Sistemas", desbloquea: [] },
  { id: "sostenible", nombre: "Diseño para el Desarrollo Sostenible", desbloquea: [] },

  { id: "interdisciplinar", nombre: "Taller de Integración Interdisciplinar", desbloquea: ["seminario"] },
  { id: "etica", nombre: "Ética del Diseño", desbloquea: ["practicaOficina"] },

  { id: "seminario", nombre: "Seminario de Título", desbloquea: ["proyectoTitulo"] },
  { id: "practicaOficina", nombre: "Práctica Profesional de Oficina", desbloquea: ["practicaServicio"] },

  { id: "proyectoTitulo", nombre: "Proyecto de Título", desbloquea: [] },
  { id: "practicaServicio", nombre: "Práctica Profesional de Servicio", desbloquea: [] }
];

const container = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.id = ramo.id;
  div.textContent = ramo.nombre;
  container.appendChild(div);
});

const estadoRamos = {};

function habilitarRamo(id) {
  const el = document.getElementById(id);
  if (el && !el.classList.contains("aprobado")) {
    el.classList.add("habilitado");
  }
}

function aprobarRamo(id) {
  const el = document.getElementById(id);
  if (el && !el.classList.contains("aprobado")) {
    el.classList.add("aprobado");
    const ramo = ramos.find(r => r.id === id);
    ramo.desbloquea.forEach(habilitarRamo);
  }
}

ramos.forEach(ramo => {
  const el = document.getElementById(ramo.id);
  el.addEventListener("click", () => {
    if (el.classList.contains("habilitado") || estadoRamos[ramo.id] === "inicio") {
      aprobarRamo(ramo.id);
    }
  });
});

// Habilitar ramos iniciales (sin requisitos)
["introDiseno", "representacion", "investigacionIntro", "historias"].forEach(habilitarRamo);
["introDiseno", "representacion", "investigacionIntro", "historias"].forEach(id => estadoRamos[id] = "inicio");

