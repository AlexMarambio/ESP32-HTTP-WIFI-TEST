#include <WiFi.h>
#include <HTTPClient.h>
#include <env.c>

const String ssid = WIFINAME;
const String password = WIFIPASS;

// API en vercel
const String servidor = "https://esp-32-http-wifi-test.vercel.app/api/message";

String mensajePendiente = "";

void setup() {
  Serial.begin(115200);
  delay(1000);

  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi "+ssid+"...");
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
