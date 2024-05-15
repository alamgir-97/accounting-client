

const Peer = () => {
    return (
        <div>
        {/* Styling based on sibling state (peer-{modifier}) */}
            <form>
                <label className="block">
                <span className="block text-sm font-medium text-slate-700">Email</span>
                <input type="email" className="peer ..."/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
                </p>
  </label>
</form>

{/* Differentiating peers */}
<fieldset>
  <legend>Published status</legend>

  <input id="draft" className="peer/draft" type="radio" name="status" checked />
  <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>

  <input id="published" className="peer/published" type="radio" name="status" />
  <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>

  <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>

{/* arbitary peer */}
<form>
  <label htmlFor="email">Email:</label>
  <input id="email" name="email" type="email" className="is-dirty peer" required />
  <div className="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>

</form>
        </div>
    );
};

export default Peer;