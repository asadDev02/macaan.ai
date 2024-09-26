import { Button, Card, Divider, Form, InputArea, TagInputField } from '@/app/elements';
import { ComposerHeader, Preview } from './components';
import { useData } from './hooks';

export const Composer = () => {

  const {
    url,
    errors,
    control,
    urlArray,
    relatedPart,
    relatedPartsArray,
    handleKeyDown,
    handleSubmit,
    handleRemoveTag
  } = useData()

  return (
    <Card cardStyle="py-4 flex flex-col justify-center" withShadow={true}>
      <ComposerHeader />
      <Divider />
      <div className="px-6">
        <Preview />
        <div className="mt-12">
          <h1 className="text-gray-700 font-bold text-xl mb-8">Compose your reply</h1>
          <Form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <TagInputField
                  name="url"
                  control={control}
                  label="URL"
                  type="text"
                  handleRemoveTag={(item) => handleRemoveTag({ item, tags: urlArray, type: 'urlArray' })}
                  tags={urlArray}
                  onKeyDown={async (event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      await handleKeyDown({
                        inputValue: url,
                        set: 'urlArray',
                        tags: urlArray,
                        type: 'url',
                      });
                    }
                  }}
                />
                {errors.url && <p className="text-red-500">{errors.url.message}</p>}
                {errors.urlArray && <p className="text-red-500">{errors.urlArray.message}</p>}
              </div>

              <div>
                <TagInputField
                  name="relatedPart"
                  control={control}
                  label="Related Parts"
                  type="text"
                  tags={relatedPartsArray}
                  handleRemoveTag={(item) => handleRemoveTag({ item, tags: relatedPartsArray, type: 'relatedPartsArray' })}
                  onKeyDown={async (event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      await handleKeyDown({
                        inputValue: relatedPart,
                        set: 'relatedPartsArray',
                        tags: relatedPartsArray,
                        type: 'relatedPart',
                      });
                    }
                  }}
                />
                {errors.relatedPart && <p className="text-red-500">{errors.relatedPart.message}</p>}
                {errors.relatedPartsArray && <p className="text-red-500">{errors.relatedPartsArray.message}</p>}
              </div>
            </div>
            <InputArea
              name="answer"
              control={control}
              label="Your answer goes here"
            />
            {errors.answer && <p className="text-red-500">{errors.answer.message}</p>}
            <div className='flex flex-wrap justify-between gap-2'>
              <div className='flex flex-wrap gap-2 items-center'>
                {[1, 2, 3].map((item, index) => (
                  <Card key={index} cardStyle='flex bg-gray-10 border border-1 border-gray-30 py-3 px-6 ' withShadow={false}>
                    <p >{`Temp ${item}`}</p>
                  </Card>
                ))}
              </div>
              <Button type='submit' variant='primary' size='medium'>
                Post Comment
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Card>
  );
};
