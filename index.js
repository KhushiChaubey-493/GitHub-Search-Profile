const BASE_URL = "https://api.github.com/users";

const searchInputEl = document.getElementById("searchInput");
const searchBtnEl = document.getElementById("searchBtn");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

function generateProfile(profile) {
  return `
    <div class="profile-box">

      <div class="top-section">

        <div class="left">

          <div class="avatar">
            <img src="${profile.avatar_url}" alt="avatar" />
          </div>

          <div class="self">
            <h1>${profile.name || "No Name"}</h1>
            <h2>@${profile.login}</h2>
          </div>

        </div>

        <a href="${profile.html_url}" target="_blank">
          <button class="primary-btn">
            Check Profile
          </button>
        </a>

      </div>

      <div class="about">
        <h2>About</h2>

        <p>
          ${profile.bio || "No bio available"}
        </p>

        <p>
          📍 ${profile.location || "Location not available"}
        </p>
      </div>

      <div class="status">

        <div class="status-item">
          <h3>Followers</h3>
          <p>${profile.followers}</p>
        </div>

        <div class="status-item">
          <h3>Following</h3>
          <p>${profile.following}</p>
        </div>

        <div class="status-item">
          <h3>Repositories</h3>
          <p>${profile.public_repos}</p>
        </div>

      </div>

    </div>
  `;
}

async function fetchProfile() {
  const username = searchInputEl.value.trim();

  if (!username) {
    loadingEl.style.color = "red";
    loadingEl.innerText = "Please enter a GitHub username";
    profileContainerEl.innerHTML = "";
    return;
  }

  loadingEl.style.color = "black";
  loadingEl.innerText = "Loading...";
  profileContainerEl.innerHTML = "";

  try {
    const response = await fetch(`${BASE_URL}/${username}`);
    const data = await response.json();

    if (data.message === "Not Found") {
      loadingEl.style.color = "red";
      loadingEl.innerText = "User not found";
      return;
    }

    loadingEl.innerText = "";
    profileContainerEl.innerHTML = generateProfile(data);

  } catch (error) {
    console.error(error);

    loadingEl.style.color = "red";
    loadingEl.innerText = "Something went wrong!";
  }
}

searchBtnEl.addEventListener("click", fetchProfile);

searchInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchProfile();
  }
});
