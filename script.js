const gajiPokok = 5941759;
const lemburKerja = 189059;
const lemburLibur = 549989;

function rupiah(angka){
    return "Rp" + angka.toLocaleString("id-ID");
}

function hitung(){

    let kerja = Number(document.getElementById("kerja").value);
    let libur = Number(document.getElementById("libur").value);
    let bonus = Number(document.getElementById("bonus").value);

    let totalKerja = kerja * lemburKerja;
    let totalLibur = libur * lemburLibur;

    let bruto = gajiPokok + totalKerja + totalLibur + bonus;

    document.getElementById("total").innerHTML = rupiah(bruto);

}