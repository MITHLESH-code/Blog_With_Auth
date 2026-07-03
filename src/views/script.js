const write = document.getElementById("write-blog");
write.addEventListener("click", async (e) => {
    try {
        const res = await fetch("/api/write-check", {
            // method: "GET",
            credentials: "include" // 👈 IMPORTANT for session
        });
        // fetch("/api/write-check", { credentials: "include" })

        if (res.status === 401) {
            alert("Please login first");
            window.location.href = "/login";
            return;

        }
        const data = await res.json();
        console.log(data);

        window.location.href = "/write";
    }
    catch (e) {
        console.log(e);
    }
});

window.addEventListener("DOMContentLoaded", async () => {

    try {

        const res = await fetch("/me", {
            credentials: "include"
        });

        const data = await res.json();

        if (data.success) {

            document.getElementById("login-link").style.display = "none";

            const profileContainer =
                document.getElementById("profile-container");

            const profilePic =
                document.getElementById("profile-pic");

            const dropdown =
                document.getElementById("dropdown-menu");

            profileContainer.style.display = "flex";

            profilePic.src = data.user.profilePic.url;

            document.getElementById("username").innerText =
                data.user.name;


            profileContainer.addEventListener("click", (e) => {
                 e.stopPropagation();
    dropdown.classList.toggle("show");
            });
             document.addEventListener("click", () => {
    dropdown.classList.remove("show");
});

            // dropdown.classList.toggle("show");
            // document.querySelector(".arrow").classList.toggle("rotate");



            // Dropdown open/close
            profileContainer.addEventListener("click", (e) => {

                e.stopPropagation();

                if (dropdown.style.display === "flex") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "flex";
                }
            });
    
            // Outside click close
            document.addEventListener("click", (e) => {

                if (!profileContainer.contains(e.target)) {
                    dropdown.style.display = "none";
                }
            });
        }

    } catch (error) {
        console.log(error);
    }
});

const logoutBtn = document.getElementById("logout-btn");

const logoutModal = document.getElementById("logout-modal");

const cancelLogout = document.getElementById("cancel-logout");

const confirmLogout = document.getElementById("confirm-logout");

logoutBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    logoutModal.style.display="flex";

});

cancelLogout.addEventListener("click",()=>{

    logoutModal.style.display="none";

});

confirmLogout.addEventListener("click",()=>{

    window.location.href="/logout";

});

logoutModal.addEventListener("click",(e)=>{

    if(e.target===logoutModal){

        logoutModal.style.display="none";

    }

});