#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Wokwi-GUEST";
const char* password = "";

// 🔁 REEMPLAZA CON TU URL REAL DE VERCEL
const char* servidor = "https://tuprojecto.vercel.app/api/mensaje";

String mensajePendiente = "";

void setup() {
  Serial.begin(115200);
  delay(1000);

  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\n✅ Conectado a WiFi");
  Serial.println("Escribe un mensaje para enviar al servidor:");
}

void loop() {
  if (Serial.available()) {
    mensajePendiente = Serial.readStringUntil('\n');
    mensajePendiente.trim();

    if (mensajePendiente != "") {
      enviarMensaje(mensajePendiente);
      mensajePendiente = "";
    }
  }
}

void enviarMensaje(String mensaje) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(servidor);
    http.addHeader("Content-Type", "application/json");

    String payload = "{\"mensaje\": \"" + mensaje + "\"}";
    int codigo = http.POST(payload);

    if (codigo > 0) {
      Serial.println("✅ Mensaje enviado");
      Serial.println("📬 Respuesta del servidor:");
      Serial.println(http.getString());
    } else {
      Serial.print("❌ Error al enviar: ");
      Serial.println(http.errorToString(codigo));
    }

    http.end();
  } else {
    Serial.println("⚠️ No conectado a WiFi");
  }
}
