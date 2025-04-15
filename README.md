# ESP32-HTTP-WIFI-TEST
 API that recieves a HTTP post request with a message sended by Serial port
## Vercel Deployment
[Vercel ESP32 test][https://esp-32-http-wifi-test.vercel.app/]

## Esteps to try
### API
- Fork repository
- Enter vercel.com
- Import proyect from GitHub
### ESP
- Open sketch on Arduino IDE
- Change url to yours, in this case: `https://esp-32-http-wifi-test.vercel.app/api/message`
- Upload to your ESP32
- Open Serial Monitor **115200 bauds**
- Write your message
Finally you can watch messages on vercel -> project -> logs
