   function openModal(id) {
       document.getElementById(id)
       .style.display = "flex";
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            modal.style.display = "none";

            // Pausar el video
            let video = modal.querySelector("video");
            if(video) video.pause();
        }
