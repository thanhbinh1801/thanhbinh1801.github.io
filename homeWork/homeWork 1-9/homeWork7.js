const inputColor = document.querySelector(".color")
const inputWidth = document.querySelector(".width")
const inputHeight = document.querySelector(".height")
const submitBtn = document.querySelector(".submit")
const rectangleDiv = document.querySelector(".rectangle")
const rectangleRemove = document.querySelector(".rectanglePlace")



submitBtn.addEventListener('click', function(){
  const color = inputColor.value;
  const width = inputWidth.value;
  const height = inputHeight.value;

  if(!color || !width || !height){
    alert("Pls enter value!")
    return;
  }
  rectangleDiv.innerHTML = `
  <div class="rectanglePlace"
  style = " 
  background-color: ${color}; 
  width: ${width}px; 
  height: ${height}px;
  border-radius: 10px "
  >
    <div class="rectanglePlace__width"> ${width}px</div>
    <div class="rectanglePlace__color"> ${color}</div>
    <div class="rectanglePlace__height"> ${height}px</div>
  </div>
  `;
})

rectangleDiv.addEventListener('click', function(){
  inputColor.value=''
  inputWidth.value=''
  inputHeight.value=''
  rectangleDiv.innerHTML =''
}
 

)