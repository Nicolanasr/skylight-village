type PageProps = {
    params: {
        slug: string;
    };
};

const AccomodationsSlug = async ({ params }: PageProps) => {
    const { slug } = params;

    return (
        <div>{slug}</div>
    );
};

export default AccomodationsSlug;
