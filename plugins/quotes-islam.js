import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://api.lolhuman.xyz/api/quotes/islami?apikey=e54205a4ca2caa368cc067bb'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { result } = json.result[0]
m.reply(`${json.result}`)
}
handler.help = ['quotes-islam']
handler.tags = ['quotes']
handler.command = /^(q-islam)$/i
handler.limit = true
export default handler
