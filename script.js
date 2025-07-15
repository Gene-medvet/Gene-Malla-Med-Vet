document.addEventListener("DOMContentLoaded", function () {
  const malla = document.getElementById("malla");

  const data = {
    "Primer año": {
      "Semestre 1": [
        "Química (CQU-110)",
        "Introducción a la medicina veterinaria (CVE-121)",
        "Matemática General (MAT-100)",
        "Taller de Comunicación Oral y Escrita (EDU-107)",
        "Biología Celular (CBI-111)"
      ],
      "Semestre 2": [
        "Inglés I (LCE-001)",
        "Bioestadística (AES-519)",
        "Bioquímica (CQU-310)",
        "Anatomía del canino (CVE-292)",
        "Histroembiología (CVE-221)"
      ]
    },
    "Segundo año": {
      "Semestre 3": [
        "Medio ambiente y gestión ambiental (CVE-3317)",
        "Anatomía comparada (CVE-312)",
        "Práctica básica (CVE-300)",
        "Inglés II (LCE-002)",
        "Zoología (CVE-211)"
      ],
      "Semestre 4": [
        "Microbiología general y veterinaria (CBI-329)",
        "Fisiología animal (CVE-421)",
        "Enfermedades parasitarias (CVE-425)",
        "Administración y emprendimiento veterinario (CVE-440)",
        "Genética (CBI-514)"
      ]
    },
    "Tercer año": {
      "Semestre 5": [
        "Etología y bienestar animal (CVE-502)",
        "Tecnología de los alimentos (CVE-551)",
        "Nutrición y alimentación animal (CVE-544)",
        "Fisiopatología (CVE-591)",
        "Inmunología (CVE-523)",
        "Reproducción e inseminación artificial (CVE-543)"
      ],
      "Semestre 6": [
        "Producción Avícola (CVE-642)",
        "Patología de sistemas (CVE-692)",
        "Control de calidad de los alimentos (CVE-651)",
        "Obstetricia y ginecología (CVE-833)",
        "Farmacología y toxicología (CVE-631)",
        "Enfermedades infecciosas (CVE-633)"
      ]
    },
    "Cuarto año": {
      "Semestre 7": [
        "Práctica Intermedia (CVE-701)",
        "Producción de ovinos y caprinos (CVE-742)",
        "Producción porcina (CVE-744)",
        "Epidemiología veterinaria (CVE-752)",
        "Semiología (CVE-732)",
        "Laboratorio clínico (CVE-792)"
      ],
      "Semestre 8": [
        "Medicina de animales mayores (CVE-831)",
        "Cirugía de animales (CVE-835)",
        "Medicina de animales exóticos (CVE-805)",
        "Medicina de felinos (CVE-803)",
        "Medicina de caninos (CVE-892)"
      ]
    },
    "Quinto año": {
      "Semestre 9": [
        "Diagnóstico por imágenes (CVE-834)",
        "Producción acuícola (CVE-042)",
        "Producción de bovinos carne y leche (CVE-995)",
        "Formulación y evaluación de proyectos (CVE-902)",
        "Metodología de la investigación (CVE-921)",
        "Práctica final (CVE-911)",
        "Patología quirúrgica"
      ],
      "Semestre 10": [
        "Farmacología aplicada (CVE-935)",
        "Salud pública (CVE-051)",
        "Clínica de animales menores (CVE-934)",
        "Clínica de animales mayores (CVE-933)",
        "Trabajo de titulación (CVE-090)"
      ]
    }
  };

  for (const año in data) {
    const añoDiv = document.createElement("div");
    añoDiv.classList.add("caja");
    const h2 = document.createElement("h2");
    h2.textContent = año;
    añoDiv.appendChild(h2);

    for (const semestre in data[año]) {
      const ul = document.createElement("ul");
      const titulo = document.createElement("strong");
      titulo.textContent = semestre;
      añoDiv.appendChild(titulo);
      añoDiv.appendChild(document.createElement("br"));

      data[año][semestre].forEach(ramo => {
        const li = document.createElement("li");
        li.textContent = ramo;
        ul.appendChild(li);
      });
      añoDiv.appendChild(ul);
    }

    document.getElementById("malla").appendChild(añoDiv);
  }
});
