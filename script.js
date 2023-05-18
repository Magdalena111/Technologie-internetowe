let rozmycie = document.getElementById('rozmycie');
let jasnosc = document.getElementById('jasnosc');
let kontrast = document.getElementById('kontrast');
let skala = document.getElementById('skala');
let saturacja = document.getElementById('saturacja');
let sepia = document.getElementById('sepia');
let zdjecie = document.getElementById('zdjecie');

rozmycie.oninput = () => {
    let wartosc_rozmycie = rozmycie.value;
    let wartosc_jasnosc = jasnosc.value
    let wartosc_kontrast = kontrast.value;
    let wartosc_skala = skala.value;
    let wartosc_saturacja = saturacja.value;
    let wartosc_sepia = sepia.value;
    
    zdjecie.style.filter = 'blur(' + wartosc_rozmycie + 'px) brightness(' + wartosc_jasnosc/100 + ') contrast(' + wartosc_kontrast * 8 + '%) grayscale(' + wartosc_skala + '%) saturate(' + wartosc_saturacja + '%) sepia(' + wartosc_sepia + '%)';
}

jasnosc.oninput = () => {
    let wartosc_rozmycie = rozmycie.value;
    let wartosc_jasnosc = jasnosc.value
    let wartosc_kontrast = kontrast.value;
    let wartosc_skala = skala.value;
    let wartosc_saturacja = saturacja.value;
    let wartosc_sepia = sepia.value;
    
    zdjecie.style.filter = 'blur(' + wartosc_rozmycie + 'px) brightness(' + wartosc_jasnosc/100 + ') contrast(' + wartosc_kontrast * 8 + '%) grayscale(' + wartosc_skala + '%) saturate(' + wartosc_saturacja + '%) sepia(' + wartosc_sepia + '%)';
}

kontrast.oninput = () => {
    let wartosc_rozmycie = rozmycie.value;
    let wartosc_jasnosc = jasnosc.value
    let wartosc_kontrast = kontrast.value;
    let wartosc_skala = skala.value;
    let wartosc_saturacja = saturacja.value;
    let wartosc_sepia = sepia.value;
    
    zdjecie.style.filter = 'blur(' + wartosc_rozmycie + 'px) brightness(' + wartosc_jasnosc/100 + ') contrast(' + wartosc_kontrast * 8 + '%) grayscale(' + wartosc_skala + '%) saturate(' + wartosc_saturacja + '%) sepia(' + wartosc_sepia + '%)';
}

skala.oninput = () => {
    let wartosc_rozmycie = rozmycie.value;
    let wartosc_jasnosc = jasnosc.value
    let wartosc_kontrast = kontrast.value;
    let wartosc_skala = skala.value;
    let wartosc_saturacja = saturacja.value;
    let wartosc_sepia = sepia.value;
    
    zdjecie.style.filter = 'blur(' + wartosc_rozmycie + 'px) brightness(' + wartosc_jasnosc/100 + ') contrast(' + wartosc_kontrast * 8 + '%) grayscale(' + wartosc_skala + '%) saturate(' + wartosc_saturacja + '%) sepia(' + wartosc_sepia + '%)';
}

saturacja.oninput = () => {
    let wartosc_rozmycie = rozmycie.value;
    let wartosc_jasnosc = jasnosc.value
    let wartosc_kontrast = kontrast.value;
    let wartosc_skala = skala.value;
    let wartosc_saturacja = saturacja.value;
    let wartosc_sepia = sepia.value;
    
    zdjecie.style.filter = 'blur(' + wartosc_rozmycie + 'px) brightness(' + wartosc_jasnosc/100 + ') contrast(' + wartosc_kontrast * 8 + '%) grayscale(' + wartosc_skala + '%) saturate(' + wartosc_saturacja + '%) sepia(' + wartosc_sepia + '%)';
}

sepia.oninput = () => {
    let wartosc_rozmycie = rozmycie.value;
    let wartosc_jasnosc = jasnosc.value
    let wartosc_kontrast = kontrast.value;
    let wartosc_skala = skala.value;
    let wartosc_saturacja = saturacja.value;
    let wartosc_sepia = sepia.value;
    
    zdjecie.style.filter = 'blur(' + wartosc_rozmycie + 'px) brightness(' + wartosc_jasnosc/100 + ') contrast(' + wartosc_kontrast * 8 + '%) grayscale(' + wartosc_skala + '%) saturate(' + wartosc_saturacja + '%) sepia(' + wartosc_sepia + '%)';
}