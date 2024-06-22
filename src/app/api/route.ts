export async function GET() {
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: "Hello guys!"});
}
