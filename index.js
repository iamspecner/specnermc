import { createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://yyjuwwyazhpfybscjgyb.supabase.co"
const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5anV3d3lhemhwZnlic2NqZ3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMDE0MTIsImV4cCI6MjEwNDU3NzQxMn0.QCj31jM6vuir1eYGE7XYh7E-WhIX2yactgP6ugtjhM8"

const supabase = createClient(
    supabaseUrl,
    supabaseKey
);

function signupButton() {
    alert('im ga6y')
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    const { data, error } = supabase
        .from("users")
        .insert({
            username: username,
            password: password,
            name: name
        })
        .select();

    if (error) {
        console.error(error);
        alert("Error creating account: " + error.message);
        return;
    }

    console.log("Created account:", data);
    alert("Account created!");
};