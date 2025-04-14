type PageProps = {
    params: {
        slug: string;
    };
};

const AccomodationsSlug = async ({ params }: PageProps) => {
    const { slug } = await params;

    return (
        <div>{slug}</div>
    );
};

export default AccomodationsSlug;
