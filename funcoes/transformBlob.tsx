//função que transforrma os file em blob
export default async function toBlob(file:any, tipo:string) {
    const byteC = atob(file)
    const byteN = new Array(byteC.length)
    for (let i = 0; i < byteC.length; i++) {
        byteN[i] = byteC.charCodeAt(i);
    }
    const byteA = new Uint8Array(byteN)
    const blob = new Blob([byteA], { type: `image/${tipo}` })
    return blob
}