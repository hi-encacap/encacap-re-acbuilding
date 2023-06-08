import CategoryLayout from "@components/Common/Layout/PostLayout";
import { LayoutBreadcrumbItemType } from "@components/Common/Layout/components/Breadcrumb/BreadcrumbItem";
import { ProjectProps } from "@components/Project/Project";
import ProjectDetail from "@components/Project/ProjectDetail";
import { ACBUILDING_CATEGORY_CODE_ENUM, IPost } from "@encacap-group/common/dist/re";
import { BasePageProps } from "@interfaces/baseTypes";
import { configService, postService } from "@services/index";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

interface ServicePageProps extends BasePageProps, ProjectProps {
  project: IPost;
}

const ServicePage = ({
  project,
  projects,
  suggestedProducts,
  suggestedServices,
  ...props
}: ServicePageProps) => {
  const breadcrumbItems: LayoutBreadcrumbItemType[] = useMemo(
    () => [
      {
        name: project.category.name,
        href: `/${ACBUILDING_CATEGORY_CODE_ENUM.PROJECT}`,
      },
    ],
    [project]
  );

  return (
    <CategoryLayout
      data={project.category}
      title={project.title}
      breadcrumbItems={breadcrumbItems}
      {...props}
    >
      <ProjectDetail
        data={project}
        projects={projects}
        suggestedProducts={suggestedProducts}
        suggestedServices={suggestedServices}
      />
    </CategoryLayout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const [siteConfig, projects, suggestedProducts, suggestedServices, project] = await Promise.all([
    configService.getSiteConfig(),
    postService.getProjects(),
    postService.getProducts(),
    postService.getServices(),
    postService.getPostById(Number(context.params?.postId)),
  ]);

  const head = { title: project.title };

  return {
    props: {
      head,
      siteConfig,
      project,
      projects,
      suggestedProducts,
      suggestedServices,
    },
  };
};

export default ServicePage;
