window.addEventListener('load', function load(){

    const inpFile = document.getElementById("inpFile")
            const previewContainer = document.getElementById("imagePreview")
            const previewImage = previewContainer.querySelector(".image-preview__image")
            const previewDefaultText = previewContainer.querySelector(".image-preview__default-text")

            inpFile.addEventListener("change", function(){
                const file = this.files[0]

                if (file){
                    const reader = new FileReader();

                    previewImage.style.display = "block";
                    previewDefaultText.style.display = "none";

                    reader.addEventListener("load", function(){
                        previewImage.setAttribute("src", this.result)
                    })

                    reader.readAsDataURL(file)
                }else{
                    previewImage.style.display = null
                    previewImage.setAttribute("src", "/images/user/<%= user.profilePicture %>")
                    previewDefaultText.display = null
                }
            })
})