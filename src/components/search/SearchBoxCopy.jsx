<form onSubmit={ onSubmit } action={ action }>
<Markdown>
    {SearchIntro}
</Markdown>
<div className="flex mb-4">
    <div className="flex-1 align-middle">
        <Label text="Occupation" helpText="SOC codes" />
        <SearchSelect name="occupation" collection="occupations" state={ state } />

        <Label text="Training Program Category" helpText="CIP4 codes" />
        <SearchSelect name="category" collection="categories" state={ state } />

        <Label text="Training Provider" />
        <SearchSelect name="provider" collection="providers" state={ state } />
    </div>
    <input type="hidden" name="p" value="1" />
    <div className="flex-1 ml-10 content-between">
        <Markdown>
            {SearchContent}
        </Markdown>
        <button
            type="submit"
            className="w-full h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-lg focus:shadow-outline hover:bg-eqos-500">
            GO
        </button>
    </div>
</div>
</form>
