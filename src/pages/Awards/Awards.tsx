import React from 'react';
import AwardsBody from "@/pages/Awards/AwardsBody";
import AwardsHeader from "@/pages/Awards/AwardsHeader";
import ArticleLayout from "@/components/Layout/ArticleLayout";

function Awards() {
    return (
       <>
           <AwardsHeader />
           <ArticleLayout>
                <AwardsBody />
           </ArticleLayout>
       </>
    );
}

export default Awards;