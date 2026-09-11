const SUPABASE_URL = "https://yyjuwwyazhpfybscjgyb.supabase.co"
const SUPABASE_ANNON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5anV3d3lhemhwZnlic2NqZ3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMDE0MTIsImV4cCI6MjEwNDU3NzQxMn0.QCj31jM6vuir1eYGE7XYh7E-WhIX2yactgP6ugtjhM8"

const SUPABASE = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANNON_KEY
);


document.getElementById('signup').addEventListener("click", signupButton)

async function signupButton() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    const { data, error } = await SUPABASE
        .from('user') // 👈 Change this to your exact table name
        .insert([
            {
                username: username,
                password: password,
                name: name
            }
        ])
        .select();

    if (error) {
        console.error(error);
        alert("Error creating account: " + error.message);
        return;
    }

    console.log("Created account:", data);
    alert("Account created!");
}