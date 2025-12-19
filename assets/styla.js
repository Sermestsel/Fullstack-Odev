const mainImg = document.getElementById("mainImg");
    document.getElementById("thumbs").addEventListener("click", (e)=>{
    const t = e.target.closest(".thumb");
        if(!t) return;
        document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));
        t.classList.add("active");
        mainImg.src= t.dataset.full;});

        const colorChips = document.querySelectorAll("#colors .chip");

colorChips.forEach(chip => {
  chip.addEventListener("click", () => {
    colorChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    console.log("Seçilen renk:", chip.dataset.color);
  });
});

const sizeChips = document.querySelectorAll("#sizes .chip");

sizeChips.forEach(chip => {
  chip.addEventListener("click", () => {
    sizeChips.forEach(s => s.classList.remove("active"));
    chip.classList.add("active");

    console.log("Seçilen beden:", chip.dataset.size);
  });
});

document.getElementById("sizes").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;

    document
      .querySelectorAll("#sizes .chip")
      .forEach(s => s.classList.remove("active"));

    chip.classList.add("active");
  });


  const decBtn = document.getElementById("dec");
const incBtn = document.getElementById("inc");
const qtyInput = document.getElementById("qyt");
const stock = parseInt(document.getElementById("stock").innerText);

incBtn.addEventListener("click", () => {
  let val = parseInt(qtyInput.value) || 1;
  if (val < stock) {
    qtyInput.value = val + 1;
  }
});

decBtn.addEventListener("click", () => {
  let val = parseInt(qtyInput.value) || 1;
  if (val > 1) {
    qtyInput.value = val - 1;
  }
});
