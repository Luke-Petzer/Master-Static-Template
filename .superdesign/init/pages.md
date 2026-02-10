# Page Component Dependency Trees

## `/` (Home Page)

**Entry:** `src/app/page.tsx`

**Dependencies:**
- `src/components/organisms/Navigation.tsx`
  - `src/components/atoms/Button.tsx`
  - `src/components/atoms/Typography.tsx`
- `src/components/organisms/Hero.tsx`
  - `src/components/atoms/Typography.tsx`
  - `src/components/atoms/Button.tsx`
  - `src/components/molecules/TrustBadge.tsx`
- `src/components/organisms/ServiceGrid.tsx`
  - `src/components/atoms/Typography.tsx`
  - `src/components/molecules/MetricCard.tsx`
    - `src/components/atoms/Typography.tsx`
- `src/components/organisms/ROICalculator.tsx`
  - `src/components/atoms/Typography.tsx`
  - `src/components/atoms/Input.tsx`
  - `src/components/atoms/Button.tsx`
- `src/components/organisms/PerformanceMetrics.tsx`
  - `src/components/atoms/Typography.tsx`
  - `src/components/molecules/MetricCard.tsx`
- `src/components/organisms/Footer.tsx`
  - `src/components/atoms/Typography.tsx`
  - `src/components/atoms/Button.tsx`
- `src/app/globals.css`
- `styled-system/css` (Panda CSS runtime)

**Global Styling Dependencies:**
- `panda.config.ts`
- `src/app/globals.css`
- `src/app/layout.tsx` (font loading)
