import {render, screen} from '@testing-library/react'
import { mocked} from 'ts-jest/utils'
import Posts, {getStaticProps} from '../../pages/posts'
import { getPrimiscClient } from '../../services/primisc';

const posts = [
    {slug: 'my-new-post', title: 'My New Post', excerpt: 'Post excerpt', updatedAt: '10 de Abril'}
];

jest.mock('../../services/primisc')

describe ('Posts page', ()=>{

    it ('renders correctly', () => {
        render( <Posts posts={posts}/>)

        expect(screen.getByText("My New Post")).toBeInTheDocument()
    })

    it('loads initial data', async ()=>{
        const getPrismicClientMocked = mocked(getPrimiscClient)
        getPrismicClientMocked.mockReturnValueOnce({
            query: jest.fn().mockResolvedValueOnce({
                results: [
                    {
                        uid: 'my-new-post',
                        data: {
                            title: [
                                {type: 'heading', text: 'My new post'}
                            ],
                            content: [
                                {type: 'paragraph', text: 'Post excerpt' }
                            ],
                        },
                        last_publication_date: '04-01-2021'
                    }
                ]
            })   
        } as any)

        const response = await getStaticProps ({})
        
        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    posts: [{
                        slug: 'my-new-post',
                        title: 'My new post',
                        excerpt: 'Post excerpt',
                        updatedAt: '01 de abril de 2021'
                    }]
                }
            })
        )
    });
})