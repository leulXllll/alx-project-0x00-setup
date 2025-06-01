import Card from "@/components/Card"
import Button from "@/components/Buttons"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-4">Button Variants</h1>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Small Buttons</h2>
        <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
        <Button title="Small Rounded-md" size="small" shape="rounded-md" />
        <Button title="Small Rounded-full" size="small" shape="rounded-full" />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Medium Buttons</h2>
        <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
        <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
        <Button title="Medium Rounded-full" size="medium" shape="rounded-full" />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Large Buttons</h2>
        <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
        <Button title="Large Rounded-md" size="large" shape="rounded-md" />
        <Button title="Large Rounded-full" size="large" shape="rounded-full" />
      </div>
      </div>
    </div>
  )
}
export default Landing