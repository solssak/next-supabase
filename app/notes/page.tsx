import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div>
      <h1>Notes</h1>
      {/* <ul>{notes?.map((note) => <li key={note.id}>{note.title}</li>)}</ul> */}
      <input type='button' value='login' id='login' />
    </div>
  );
}
